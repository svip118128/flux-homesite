/**
 * Download URLs configuration
 * Store your files on CDN, Cloud Storage (S3, Azure Blob, etc.), or any remote server
 * 
 * This config is used client-side for SSG/CSR support
 */

export interface DownloadConfig {
    url: string
    version?: string
    filename?: string
}

export const downloadUrls: Record<string, Record<string, DownloadConfig>> = {
    windows: {
        win64: {
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260110-06184ee9.exe.zip',
            version: '0.0.8',
            filename: 'jdchat-amd64-20260110-06184ee9.exe.zip'
        },
        win32: {
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260110-06184ee9.exe.zip',
            version: '0.0.8',
            filename: 'jdchat-amd64-20260110-06184ee9.exe.zip'
        },
        arm64: {
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260110-06184ee9.exe.zip',
            version: '0.0.8',
            filename: 'jdchat-amd64-20260110-06184ee9.exe.zip'
        }
    },
    mac: {
        silicon: {
            url: 'https://og.jdchat.im/jdchatapp/mac/dchat-arm64-20260110-7eee9b74.dmg',
            version: '0.0.8',
            filename: 'dchat-arm64-20260110-7eee9b74.dmg'
        },
        intel: {
            url: 'https://og.jdchat.im/jdchatapp/mac/jdchat-amd64-2026010-e20d9439.dmg',
            version: '0.0.8',
            filename: 'jdchat-amd64-2026010-e20d9439.dmg'
        }
    }
}

export const androidDownloadUrl: DownloadConfig = {
    url: 'https://antitheft-server.onrender.com/api/products/antitheft/downloads/1.0/setup.exe',
    version: '1.0.0',
    filename: 'jdchat-release-gw-1.0.0-20251226.apk'
}

export const iosDownloadUrl: DownloadConfig = {
    url: 'https://apps.apple.com/app/yourapp',
    version: '1.0.0'
}
