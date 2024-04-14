import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import GameHeading from '../components/gameHeading'
import GamesGrid from '../components/gamesGrid'
import GenreList from '../components/genreList'
import PlatformSelector from '../components/platformSelector'
import SortSelector from '../components/sortSelector'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      padding='10px'
      gap={3}
    >
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

export default HomePage
