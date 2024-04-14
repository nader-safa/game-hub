import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './colorModeSwitch'
import SearchInput from './searchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack gap={5}>
      <Link to='/'>
        <Image src={logo} alt='logo' width={50} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
