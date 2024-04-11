import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './gameCard'

const GamesGrid = () => {
  const { games, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />
        })}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
