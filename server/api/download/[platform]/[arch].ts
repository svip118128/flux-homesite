import { downloadUrls } from "~~/server/config/downloads"

const DOWNLOAD_MODE: 'redirect' | 'proxy' = 'redirect'

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

  // Determine folder name based on platform and architecture
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
      folderName = 'win64' // Default
    }
  } else if (normalizedPlatform === 'mac' || normalizedPlatform === 'macos') {
    normalizedPlatform = 'mac' // normalize
    const archLower = arch.toLowerCase()
    if (archLower === 'silicon' || archLower === 'arm64' || archLower === 'arm') {
      folderName = 'silicon'
    } else if (archLower === 'intel' || archLower === 'x64' || archLower === 'amd64') {
      folderName = 'intel'
    } else {
      folderName = 'silicon' // Default
    }
  } else {
    throw createError({
      statusCode: 404,
      message: 'Platform not supported'
    })
  }

  // Get download config from remote URLs
  const platformConfig = downloadUrls[normalizedPlatform]
  if (!platformConfig) {
    throw createError({
      statusCode: 404,
      message: 'Platform not found in download configuration'
    })
  }

  let downloadConfig = platformConfig[folderName]
  
  // Fallback for Windows ARM to x64
  if (!downloadConfig && normalizedPlatform === 'windows' && folderName === 'win64-arm') {
    downloadConfig = platformConfig['win64']
  }

  if (!downloadConfig || !downloadConfig.url) {
    throw createError({
      statusCode: 404,
      message: 'Download not available for this platform/architecture'
    })
  }

  // Mode 1: Simple redirect to remote URL (recommended for CDN)
  if (DOWNLOAD_MODE === 'redirect') {
    return sendRedirect(event, downloadConfig.url, 302)
  }

  // Mode 2: Proxy/Stream through server (for analytics, tracking)
  try {
    const response = await fetch(downloadConfig.url)
    
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: 'Failed to fetch download file from remote server'
      })
    }

    // Set appropriate headers
    const headers: Record<string, string> = {
      'Content-Type': response.headers.get('content-type') || 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${downloadConfig.filename || 'download'}"`
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      headers['Content-Length'] = contentLength
    }

    // Stream the file
    return new Response(response.body, {
      status: 200,
      headers
    })
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: `Download error: ${error.message || 'Unknown error'}`
    })
  }
})