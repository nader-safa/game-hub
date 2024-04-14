import useTrailers from '../hooks/useTrailers'
import { Spinner } from '@chakra-ui/react'
interface Props {
  gameId: number
}
const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId)

  if (isLoading) return <Spinner />

  if (error || !trailers) throw error

  const video = trailers.results[0]

  if (!video) return null

  return <video controls src={video.data[480]} poster={video.preview} />
}

export default GameTrailer
