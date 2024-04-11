import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'
import { SortOrder } from '../App'

interface Props {
  onSortSelect: (sort: SortOrder) => void
  selectedSortOrder: SortOrder | null
}

const SortSelector = ({ onSortSelect, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {`Order By: ${selectedSortOrder?.label || 'Relevance'}`}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSortSelect(order)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
