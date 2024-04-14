import { Box } from '@chakra-ui/react'
import NavBar from '../components/navBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box p={5}>
      <NavBar />
      <Box mt={5} mx={1}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
