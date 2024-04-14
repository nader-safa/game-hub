import { Box, Heading, Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ExpandableText from '../components/expandableText'
import GameAttributes from '../components/gameAttributes'
import GameScreenshots from '../components/gameScreenshots'
import GameTrailer from '../components/gameTrailer'
import useGame from '../hooks/useGame'

const GameDetailPage = () => {
  const { slug } = useParams()

  const { data: game, error, isLoading } = useGame(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box my={3}>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  )
}

export default GameDetailPage
