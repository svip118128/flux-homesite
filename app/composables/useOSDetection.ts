export const useOSDetection = () => {
  const osInfo = useState('osInfo', () => ({
    platform: null as string | null,
    architecture: null as string | null,
    isDetecting: true
  }))

  const detectOS = () => {
    if (process.server) return

    const ua = navigator.userAgent.toLowerCase()
    const platform = navigator.platform.toLowerCase()
    
    let detectedPlatform: string | null = null
    let architecture: string | null = null

    // Detect iOS
    if (/iphone|ipad|ipod/.test(ua)) {
      detectedPlatform = 'ios'
    }
    // Detect macOS
    else if (/mac/.test(ua) || /mac/.test(platform)) {
      detectedPlatform = 'mac'
      // Check for ARM/Apple Silicon
      if (ua.includes('arm') || ua.includes('aarch64') || navigator.platform.includes('ARM')) {
        architecture = 'silicon'
      } else {
        architecture = 'intel'
      }
    }
    // Detect Windows
    else if (/win/.test(ua) || /win/.test(platform)) {
      detectedPlatform = 'windows'
      // Check for ARM64
      if (ua.includes('arm64') || ua.includes('aarch64') || platform.includes('arm')) {
        architecture = 'arm64'
      }
      // Check for 64-bit (AMD64/Intel64)
      else if (ua.includes('win64') || ua.includes('wow64') || ua.includes('x64') || platform.includes('win64')) {
        architecture = 'win64'
      } 
      // Default to 32-bit
      else {
        architecture = 'win32'
      }
    }

    osInfo.value = {
      platform: detectedPlatform,
      architecture: architecture,
      isDetecting: false
    }
  }

  onMounted(() => {
    detectOS()
  })

  return {
    osInfo: readonly(osInfo),
    detectOS
  }
}