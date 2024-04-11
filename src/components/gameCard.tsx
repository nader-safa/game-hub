import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface GameCardProps {
  game: Game
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} objectFit={'cover'} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
