import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './colorModeSwitch'

const NavBar = () => {
  return (
    <HStack justify='space-between' padding='10px'>
      <Image src={logo} alt='logo' width={50} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
