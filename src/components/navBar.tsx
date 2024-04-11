import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './colorModeSwitch'
import SearchInput from './searchInput'

const NavBar = () => {
  return (
    <HStack gap={5}>
      <Image src={logo} alt='logo' width={50} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
