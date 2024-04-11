import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Game {
  id: number
  name: string
}
interface FetchGamesResponse {
  count: number
  next: string
  previous: string
  results: Game[]
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        setGames(res.data.results)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>
        })}
      </ul>
    </>
  )
}

export default GamesGrid
