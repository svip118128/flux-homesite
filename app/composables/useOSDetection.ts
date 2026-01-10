import { UAParser } from 'ua-parser-js'

export const useOSDetection = () => {
  const osInfo = useState('osInfo', () => ({
    platform: null as string | null,
    architecture: null as string | null,
    isDetecting: true
  }))

  const detectOS = () => {
    if (process.server) return

    const parser = new UAParser(navigator.userAgent)
    const os = parser.getOS()
    const cpu = parser.getCPU()

    let detectedPlatform: string | null = null
    let architecture: string | null = null

    const osName = os.name?.toLowerCase() || ''

    // Detect iOS
    if (osName === 'ios') {
      detectedPlatform = 'ios'
    }
    // Detect macOS
    else if (osName === 'mac os' || osName === 'macos') {
      detectedPlatform = 'mac'
      // Check for ARM/Apple Silicon
      if (cpu.architecture === 'arm64' || cpu.architecture === 'arm') {
        architecture = 'silicon'
      } else {
        architecture = 'intel'
      }
    }
    // Detect Windows
    else if (osName === 'windows') {
      detectedPlatform = 'windows'
      // Check architecture
      if (cpu.architecture === 'arm64') {
        architecture = 'arm64'
      } else if (cpu.architecture === 'amd64' || cpu.architecture === 'ia64') {
        architecture = 'win64'
      } else {
        architecture = 'win32'
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