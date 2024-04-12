import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
import { useState } from 'react'
import PlatformSelector from './components/platformSelector'
import SortSelector from './components/sortSelector'
import GameHeading from './components/gameHeading'

export interface SortOrder {
  value: string
  label: string
}

export interface GameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      padding='10px'
      gap={3}
    >
      <GridItem area={'nav'}>
        <NavBar
          onSearch={(searchText) =>
            setGameQuery((prevState) => ({ ...prevState, searchText }))
          }
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'}>
          <GenreList
            onGenreSelect={(genreId) =>
              setGameQuery((prevState) => ({ ...prevState, genreId }))
            }
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={3} marginBottom={5}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onPlatformSelect={(platformId) =>
              setGameQuery((prevState) => ({
                ...prevState,
                platformId,
              }))
            }
          />
          <SortSelector
            onSortSelect={(sortOrder) =>
              setGameQuery((prevState) => ({ ...prevState, sortOrder }))
            }
            selectedSortOrderValue={gameQuery.sortOrder}
          />
        </Flex>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
