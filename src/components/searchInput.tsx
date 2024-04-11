import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
  onSearch: (searchText: string) => void
}
const SearchInput = ({ onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (searchInputRef.current) onSearch(searchInputRef.current.value)
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input
          placeholder='Search for games...'
          borderRadius={20}
          variant={'filled'}
          ref={searchInputRef}
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
