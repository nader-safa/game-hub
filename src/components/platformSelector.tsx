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
import { Platform } from '../hooks/useGames'

interface Props {
  selectedPlatform: Platform | null
  onPlatformSelect: (platform: Platform) => void
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: Props) => {
  const { data: platforms, error, isLoading } = usePlatforms()

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
            onClick={() => onPlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
