/**
 * Remote download URLs configuration
 * Store your files on CDN, Cloud Storage (S3, Azure Blob, etc.), or any remote server
 */

export interface DownloadConfig {
  url: string
  version?: string
  filename?: string
}

export const downloadUrls: Record<string, Record<string, DownloadConfig>> = {
  windows: {
    win64: {
      url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
      version: '0.0.6',
      filename: 'jdchat-amd64-dev-gw-0.0.6-20260102.rar'
    },
    win32: {
      url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
      version: '0.0.6',
      filename: 'jdchat-x86-dev-gw-0.0.6-20260102.rar'
    },
    'win64-arm': {
      url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
      version: '0.0.6',
      filename: 'jdchat-arm64-dev-gw-0.0.6-20260102.rar'
    }
  },
  mac: {
    silicon: {
      url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
      version: '0.0.6',
      filename: 'jdchat-arm64-dev-gw-0.0.6-20260102.zip'
    },
    intel: {
      url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
      version: '0.0.6',
      filename: 'jdchat-amd64-dev-gw-0.0.6-20260102.zip'
    }
  }
}

export const androidDownloadUrl: DownloadConfig = {
  url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
  version: '1.0.0',
  filename: 'jdchat-release-gw-1.0.0-20251226.apk'
}

