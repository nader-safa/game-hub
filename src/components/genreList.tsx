import {
  Button,
  Heading,
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
  onGenreSelect: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres()

  if (error) return null

  return (
    <List>
      <Heading fontSize='2xl' mb={3}>
        Genres
      </Heading>
      {isLoading &&
        [1, 2, 3, 4, 5, 6].map((i) => (
          <HStack key={i} paddingY='5px'>
            <Skeleton height='40px' width='40px' borderRadius={5} />
            <SkeletonText width='150px' noOfLines={2} />
          </HStack>
        ))}
      {genres?.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={optimizedImageUrl(genre.image_background)}
              boxSize='40px'
              alt={genre.name}
              borderRadius={5}
              objectFit='cover'
            />
            <Button
              whiteSpace='normal'
              textAlign='left'
              variant='link'
              fontSize='lg'
              fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
              onClick={() => onGenreSelect(genre)}
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
