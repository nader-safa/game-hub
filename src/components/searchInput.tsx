import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const onSearch = useGameQueryStore((s) => s.setSearchText)

  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        if (searchInputRef.current) {
          navigate('/')
          onSearch(searchInputRef.current.value)
        }
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
