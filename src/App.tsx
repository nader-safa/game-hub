import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
import PlatformSelector from './components/platformSelector'
import { Platform } from './hooks/useGames'
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  )
  const onGenreSelect = (genre: Genre) => setSelectedGenre(genre)
  const onPlatformSelect = (platform: Platform) => setSelectedPlatform(platform)

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
          <GenreList
            onGenreSelect={onGenreSelect}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onPlatformSelect={onPlatformSelect}
        />
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  )
}

export default App
