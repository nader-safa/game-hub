import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../entities/Game'
import PlatformIconList from './platformIconList'
import CriticScore from './criticScore'
import optimizedImageUrl from '../services/image-url'
import Emoji from './emoji'
import { Link } from 'react-router-dom'

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
        <Link to={'/games/' + game.slug}>
          <HStack>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <Emoji rating={game.rating_top} />
          </HStack>
        </Link>
      </CardBody>
    </Card>
  )
}

export default GameCard
