import { readdir } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const filesDir = join(process.cwd(), 'public', 'files', 'android')
  
  try {
    const files = await readdir(filesDir)
    const file = files.find(f => !f.startsWith('.') && f.endsWith('.apk')) 
      || files.find(f => !f.startsWith('.'))
    
    if (!file) {
      throw createError({
        statusCode: 404,
        message: 'Android APK not found'
      })
    }

    const filePath = `/files/android/${file}`
    return sendRedirect(event, filePath, 302)
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    throw createError({
      statusCode: 404,
      message: `Android download not found: ${error.message}`
    })
  }
})

