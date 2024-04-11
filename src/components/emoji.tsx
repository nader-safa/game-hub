import Meh from '../assets/Emojis/meh.webp'
import BullsEye from '../assets/Emojis/bulls-eye.webp'
import ThumbsUp from '../assets/Emojis/thumbs-up.webp'
import { Image, ImageProps } from '@chakra-ui/react'
const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: 'meh', boxSize: '25px' },
    4: { src: ThumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: BullsEye, alt: 'exceptional', boxSize: '35px' },
  }
  return <Image {...emojiMap[rating]} mt={1} />
}

export default Emoji
