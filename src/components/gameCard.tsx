import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './platformIconList'
import CriticScore from './criticScore'
import optimizedImageUrl from '../services/image-url'

interface GameCardProps {
  game: Game
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image
        src={optimizedImageUrl(game.background_image)}
        alt={game.name}
        objectFit={'cover'}
      />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
