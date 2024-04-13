import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { useMemo } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import useGameQueryStore from '../store'

const SortSelector = () => {
  const sortOrders = useMemo(
    () => [
      { value: '', label: 'Relevance' },
      { value: '-added', label: 'Date added' },
      { value: 'name', label: 'Name' },
      { value: '-released', label: 'Release date' },
      { value: '-metacritic', label: 'Popularity' },
      { value: '-rating', label: 'Average rating' },
    ],
    []
  )

  const { selectedSortOrderValue, onSortSelect } = useGameQueryStore((s) => ({
    selectedSortOrderValue: s.gameQuery.sortOrder,
    onSortSelect: s.setSortOrder,
  }))

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
