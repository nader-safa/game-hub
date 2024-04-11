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

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((i) => (
            <GameCardContainer key={i}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
