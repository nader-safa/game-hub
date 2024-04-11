import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import optimizedImageUrl from '../services/image-url'

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres()
  return (
    <List>
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((i) => (
          <HStack key={i} marginY='5px'>
            <Skeleton height='40px' width='40px' borderRadius={5} />
            <SkeletonText width={'100%'} noOfLines={2} />
          </HStack>
        ))}
      {error && <Text>{error}</Text>}
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
