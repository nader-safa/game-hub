import Game from '../entities/Game'
import { SimpleGrid, Text } from '@chakra-ui/react'
import CriticScore from './criticScore'
import DefinitionItem from './definitionItem'

interface Props {
  game: Game
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      {game.metacritic && (
        <DefinitionItem term='Rating'>
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      )}
      {game.genres.length > 0 && (
        <DefinitionItem term='Genres'>
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.developers.length > 0 && (
        <DefinitionItem term='Developers'>
          {game.developers.map((developer) => (
            <Text key={developer.id}>{developer.name}</Text>
          ))}
        </DefinitionItem>
      )}
      {game.publishers.length > 0 && (
        <DefinitionItem term='Publishers'>
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      )}
    </SimpleGrid>
  )
}

export default GameAttributes
