import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './gameCard'
import GameCardSkeleton from './gameCardSkeleton'
import GameCardContainer from './gameCardContainer'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery)

  if (error) return <Text>{error.message}</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((i) => (
          <GameCardContainer key={i}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}

export default GamesGrid
