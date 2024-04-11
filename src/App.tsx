import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navBar'
import GamesGrid from './components/gamesGrid'
import GenreList from './components/genreList'
import { Genre } from './hooks/useGenres'
import { useState } from 'react'
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const handleGenreClick = (genre: Genre) => {
    setSelectedGenre(genre)
    console.log(genre.name)
  }

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
            onGenreClick={handleGenreClick}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
