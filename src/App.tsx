import { Grid, GridItem, Show } from '@chakra-ui/react'
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={'nav'} bg='pink.100'>
        nav
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} bg='blue.100'>
          aside
        </GridItem>
      </Show>
      <GridItem area={'main'} bg='green.100'>
        main
      </GridItem>
    </Grid>
  )
}

export default App
