import { Button } from '@chakra-ui/react'
function App() {
  return (
    <Button
      colorScheme='blue'
      onClick={() => {
        console.log('click')
      }}
    >
      Button
    </Button>
  )
}

export default App
