import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './platformIconList'
import CriticScore from './criticScore'
import optimizedImageUrl from '../services/image-url'
import Emoji from './emoji'

interface GameCardProps {
  game: Game
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image
        src={optimizedImageUrl(game.background_image)}
        alt={game.name}
        objectFit={'cover'}
      />
      <CardBody>
        <HStack justifyContent={'space-between'} mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}

export default GameCard
