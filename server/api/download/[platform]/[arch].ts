import { readdir } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const platform = getRouterParam(event, 'platform')
  const arch = getRouterParam(event, 'arch')

  if (!platform) {
    throw createError({
      statusCode: 400,
      message: 'Platform is required'
    })
  }

  let normalizedPlatform = platform.toLowerCase()

  if (!arch) {
    throw createError({
      statusCode: 400,
      message: 'Architecture is required for this platform'
    })
  }

  let folderName = ''
  
  if (normalizedPlatform === 'windows') {
    const archLower = arch.toLowerCase()
    if (archLower === 'x64' || archLower === 'amd64' || archLower === 'win64') {
      folderName = 'win64'
    } else if (archLower === 'x86' || archLower === 'win32') {
      folderName = 'win32'
    } else if (archLower === 'arm64') {
      folderName = 'win64-arm' 
    } else {
      folderName = 'win64'
    }
  } else if (normalizedPlatform === 'mac' || normalizedPlatform === 'macos') {
    normalizedPlatform = 'mac' // normalize
    const archLower = arch.toLowerCase()
    if (archLower === 'silicon' || archLower === 'arm64' || archLower === 'arm') {
      folderName = 'silicon'
    } else if (archLower === 'intel' || archLower === 'x64' || archLower === 'amd64') {
      folderName = 'intel'
    } else {
      folderName = 'silicon' 
    }
  } else {
    throw createError({
      statusCode: 404,
      message: 'Platform not supported'
    })
  }

  const findFile = async (dir: string): Promise<string | null> => {
    try {
      const files = await readdir(dir)
      const allowedExtensions = normalizedPlatform === 'windows' 
        ? ['.rar', '.exe', '.msi', '.zip'] 
        : ['.zip', '.dmg']
      
      const file = files.find(f => {
        if (f.startsWith('.')) return false
        const ext = f.toLowerCase().substring(f.lastIndexOf('.'))
        return allowedExtensions.includes(ext)
      })
      return file || null
    } catch {
      return null
    }
  }

  const tryFallback = async (): Promise<string | null> => {
    if (normalizedPlatform === 'windows' && folderName === 'win64-arm') {
      const fallbackDir = join(process.cwd(), 'public', 'files', normalizedPlatform, 'win64')
      return await findFile(fallbackDir)
    }
    return null
  }

  const dirParts = [process.cwd(), 'public', 'files', normalizedPlatform]
  if (folderName) {
    dirParts.push(folderName)
  }
  const filesDir = join(...dirParts)
  
  try {
    const file = await findFile(filesDir)
    
    if (file) {
      const filePath = folderName 
        ? `/files/${normalizedPlatform}/${folderName}/${file}`
        : `/files/${normalizedPlatform}/${file}`
      return sendRedirect(event, filePath, 302)
    }

    const fallbackFile = await tryFallback()
    if (fallbackFile) {
      const filePath = `/files/${normalizedPlatform}/win64/${fallbackFile}`
      return sendRedirect(event, filePath, 302)
    }
    
    throw createError({
      statusCode: 404,
      message: 'Download file not found'
    })
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    const fallbackFile = await tryFallback()
    if (fallbackFile) {
      const filePath = `/files/${normalizedPlatform}/win64/${fallbackFile}`
      return sendRedirect(event, filePath, 302)
    }
    
    throw createError({
      statusCode: 404,
      message: `Download not found: ${error.message}`
    })
  }
})