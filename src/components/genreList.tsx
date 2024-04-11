import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'
import optimizedImageUrl from '../services/image-url'

interface Props {
  onGenreClick: (genre: Genre) => void
}

const GenreList = ({ onGenreClick }: Props) => {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return null

  return (
    <List>
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((i) => (
          <HStack key={i} marginY='5px'>
            <Skeleton height='40px' width='40px' borderRadius={5} />
            <SkeletonText width={'100%'} noOfLines={2} />
          </HStack>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={optimizedImageUrl(genre.image_background)}
              boxSize='2rem'
              alt={genre.name}
              borderRadius={5}
            />
            <Button
              variant='link'
              fontSize='lg'
              onClick={() => onGenreClick(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
