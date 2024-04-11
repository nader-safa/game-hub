import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      padding='10px'
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}>aside</GridItem>
      </Show>
      <GridItem area={'main'}>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default App
