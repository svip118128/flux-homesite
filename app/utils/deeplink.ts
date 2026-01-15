import { customScheme } from '~/config'

export function extractDeepLinkPath(url: string): string {
    const linkIndex = url.indexOf('/link')
    if (linkIndex !== -1) {
        return url.substring(linkIndex + 5)
    }
    return ''
}

export function buildCustomSchemeUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path.substring(1) : path
    return `${customScheme}://${cleanPath}`
}

export function openDeepLink(url: string) {
    const path = extractDeepLinkPath(url)
    if (!path) return

    const customSchemeUrl = buildCustomSchemeUrl(path)
    const userAgent = navigator.userAgent.toLowerCase()
    const isIOS = /iphone|ipad|ipod/.test(userAgent)
    const isAndroid = /android/.test(userAgent)

    if (isIOS || isAndroid) {
         window.location.href = customSchemeUrl
    }
}
