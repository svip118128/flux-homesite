import { UAParser } from 'ua-parser-js'

export const useOSDetection = () => {
  const osInfo = useState('osInfo', () => ({
    platform: null as string | null,
    architecture: null as string | null,
    isDetecting: true
  }))

  const detectOS = async () => {
    if (import.meta.server) return

    const parser = new UAParser(navigator.userAgent)
    const os = parser.getOS()
    const cpu = parser.getCPU()

    let detectedPlatform: string | null = null
    let architecture: string | null = null

    const osName = os.name?.toLowerCase() || ''

    // Try to get architecture from modern userAgentData API
    let userAgentArch: string | null = null
    if ('userAgentData' in navigator && (navigator as any).userAgentData?.getHighEntropyValues) {
      try {
        const uaData = await (navigator as any).userAgentData.getHighEntropyValues(['architecture'])
        userAgentArch = uaData.architecture?.toLowerCase() || null
      } catch (e) {
        // Fallback to UAParser
      }
    }

    // Detect iOS
    if (osName === 'ios') {
      detectedPlatform = 'ios'
    }
    // Detect macOS
    else if (osName === 'mac os' || osName === 'macos') {
      detectedPlatform = 'mac'
      // Check for ARM/Apple Silicon using multiple methods
      if (userAgentArch === 'arm') {
        architecture = 'silicon'
      } else if (cpu.architecture === 'arm64' || cpu.architecture === 'arm') {
        architecture = 'silicon'
      } else if (userAgentArch === 'x86') {
        architecture = 'intel'
      } else {
        // Default to silicon for modern Macs (Apple Silicon since 2020)
        // Most browsers don't expose CPU architecture on macOS
        // Users on Intel Macs can manually select from download options
        architecture = 'silicon'
      }
    }
    // Detect Windows
    else if (osName === 'windows') {
      detectedPlatform = 'windows'
      // Check architecture
      if (userAgentArch === 'arm') {
        architecture = 'arm64'
      } else if (cpu.architecture === 'arm64') {
        architecture = 'arm64'
      } else if (cpu.architecture === 'amd64' || cpu.architecture === 'ia64') {
        architecture = 'win64'
      } else {
        architecture = 'win64' // Default to 64-bit for modern Windows
      }
    }
    // Detect Android
    else if (osName === 'android') {
      detectedPlatform = 'android'
    }
    // Detect Linux
    else if (osName === 'linux' || osName === 'ubuntu' || osName === 'debian' || osName === 'fedora' || osName === 'centos') {
      detectedPlatform = 'linux'
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