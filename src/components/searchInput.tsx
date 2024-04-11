import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<FaSearch />} />
      <Input
        placeholder='Search for games...'
        borderRadius={20}
        variant={'filled'}
      />
    </InputGroup>
  )
}

export default SearchInput
