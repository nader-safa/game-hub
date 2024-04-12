import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

interface Props {
  onSortSelect: (sort: string) => void
  selectedSortOrderValue?: string
}

const SortSelector = ({ onSortSelect, selectedSortOrderValue }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const selectedSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrderValue
  )
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
            onClick={() => onSortSelect(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
