import { androidDownloadUrl } from "~~/server/config/downloads"

const DOWNLOAD_MODE: 'redirect' | 'proxy' = 'redirect'

export default defineEventHandler(async (event) => {
  if (!androidDownloadUrl || !androidDownloadUrl.url) {
    throw createError({
      statusCode: 404,
      message: 'Android download not configured'
    })
  }

  // Mode 1: Simple redirect to remote URL (recommended for CDN)
  if (DOWNLOAD_MODE === 'redirect') {
    return sendRedirect(event, androidDownloadUrl.url, 302)
  }

  // Mode 2: Proxy/Stream through server
  try {
    const response = await fetch(androidDownloadUrl.url)
    
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: 'Failed to fetch Android APK from remote server'
      })
    }

    const headers: Record<string, string> = {
      'Content-Type': response.headers.get('content-type') || 'application/vnd.android.package-archive',
      'Content-Disposition': `attachment; filename="${androidDownloadUrl.filename || 'app.apk'}"`
    }

    const contentLength = response.headers.get('content-length')
    if (contentLength) {
      headers['Content-Length'] = contentLength
    }

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
      message: `Android download error: ${error.message || 'Unknown error'}`
    })
  }
})
