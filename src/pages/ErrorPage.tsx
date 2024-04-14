import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/navBar'

const ErrorPage = () => {
  const error = useRouteError()
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : 'An unexpected error has occurred.'

  return (
    <Box padding={6}>
      <NavBar />
      <Heading>Ooops</Heading>
      <Text>{errorMessage}</Text>
    </Box>
  )
}

export default ErrorPage
