import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  children: string
}
const ExpandableText = ({ children }: Props) => {
  const limit = 300
  const [isExpanded, setIsExpanded] = useState(false)

  if (!children) return null

  if (children.length <= limit) return <Text>{children}</Text>
  const summary = isExpanded ? children : children.substring(0, limit) + '...'
  return (
    <>
      <Text>{summary}</Text>
      <Button
        onClick={() => {
          setIsExpanded((prevState) => !prevState)
        }}
        colorScheme='yellow'
        my={2}
        fontWeight={'bold'}
        size={'sm'}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </>
  )
}

export default ExpandableText
