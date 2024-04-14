import APIClient, { FetchResponse } from '../services/api-client'
import ms from 'ms'
import { Trailer } from '../entities/Trailer'
import { useQuery } from '@tanstack/react-query'

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`)
  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  })
}

export default useTrailers
