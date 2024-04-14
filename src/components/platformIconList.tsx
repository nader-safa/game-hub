import { HStack, Icon } from '@chakra-ui/react'
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
import { Platform } from '../entities/Platform'

interface Props {
  platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
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
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  )
}

export default PlatformIconList
