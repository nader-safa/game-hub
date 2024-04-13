import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms()

  const { selectedPlatformId, onPlatformSelect } = useGameQueryStore((s) => ({
    selectedPlatformId: s.gameQuery.platformId,
    onPlatformSelect: s.setPlatformId,
  }))

  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList onSelect={() => console.log('selected!')}>
        {isLoading && <Spinner />}
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id}
            onClick={() => onPlatformSelect(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
