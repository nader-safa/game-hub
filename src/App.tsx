import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GameHeading from './components/gameHeading'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
import NavBar from './components/navBar'
import PlatformSelector from './components/platformSelector'
import SortSelector from './components/sortSelector'

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      padding='10px'
      gap={3}
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
        <GameHeading />
        <Flex gap={3} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default App
