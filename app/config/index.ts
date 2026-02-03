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
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip',
            version: '1.0.3',
            filename: 'jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip'
        },
        win32: {
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip',
            version: '1.0.3',
            filename: 'jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip'
        },
        arm64: {
            url: 'https://og.jdchat.im/jdchatapp/pc/jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip',
            version: '1.0.3',
            filename: 'jdchat-amd64-20260130-1.0.3-9ef932c0.exe.zip'
        }
    },
    mac: {
        silicon: {
            url: 'https://og.jdchat.im/jdchatapp/mac/jdchat-arm64-20260130-1.0.3-76c2929b.dmg',
            version: '1.0.3',
            filename: 'jdchat-arm64-20260130-1.0.3-76c2929b.dmg'
        },
        intel: {
            url: 'https://og.jdchat.im/jdchatapp/mac/jdchat-amd64-20260130-1.0.3-695b20a9.dmg',
            version: '1.0.3',
            filename: 'jdchat-amd64-20260130-1.0.3-695b20a9.dmg'
        }
    }
}

export const androidDownloadUrl: DownloadConfig = {
    url: 'https://play.google.com/store/apps/details?id=app.jdchat.me',
    version: '1.0.3',
    // filename: 'jdchat-release-gw-1.0.0-20251226.apk'
}

export const iosDownloadUrl: DownloadConfig = {
    url: 'https://apps.apple.com/us/app/jdchat/id6756490888',
    version: '1.0.3'
}

export const customScheme = 'www.jdchat.im'
