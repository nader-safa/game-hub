import { Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/platformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/sortSelector'

export interface SortOrder {
  value: string
  label: string
}

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: SortOrder | null
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
            onGenreSelect={(genre) =>
              setGameQuery((prevState) => ({ ...prevState, genre }))
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Flex gap={3} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onPlatformSelect={(platform) =>
              setGameQuery((prevState) => ({ ...prevState, platform }))
            }
          />
          <SortSelector
            onSortSelect={(sortOrder) =>
              setGameQuery((prevState) => ({ ...prevState, sortOrder }))
            }
            selectedSortOrder={gameQuery.sortOrder}
          />
        </Flex>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
