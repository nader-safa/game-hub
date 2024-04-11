import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import optimizedImageUrl from '../services/image-url'

const GenreList = () => {
  const { data: genres } = useGenres()
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={optimizedImageUrl(genre.image_background)}
              boxSize='2rem'
              alt={genre.name}
              borderRadius={5}
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
