import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      padding='10px'
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default App
