import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Box, Heading, Spinner } from '@chakra-ui/react'
import ExpandableText from '../components/expandableText'

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
    </>
  )
}

export default GameDetailPage
