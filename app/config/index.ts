import packageJson from '../../package.json'

export const VERSION = packageJson.version

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
    url: 'https://play.google.com/store/apps/details?id=app.jdchat.me',
    version: '1.0.0',
    filename: 'jdchat-release-gw-1.0.0-20251226.apk'
}

export const iosDownloadUrl: DownloadConfig = {
    url: 'https://apps.apple.com/us/app/jdchat/id6756490888',
    version: '1.0.0'
}

export const customScheme = 'www.jdchat.im'
