import { Icon } from '@chakra-ui/react'
import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaAndroid,
  FaLinux,
  FaApple,
  FaGlobe,
} from 'react-icons/fa'
import { MdLaptopMac } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'

import { IconType } from 'react-icons'
import { Platform } from '../hooks/useGames'

interface Props {
  platform: Platform
}
const PlatformIcon = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    android: FaAndroid,
    linux: FaLinux,
    ios: FaApple,
    web: FaGlobe,
    mac: MdLaptopMac,
    nintendo: SiNintendo,
  }
  return <Icon as={iconMap[platform.slug]} color='gray.500' />
}

export default PlatformIcon
