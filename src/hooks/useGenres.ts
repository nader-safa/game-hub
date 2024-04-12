import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import APIClient, { FetchResponse } from '../services/api-client'

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

const apiClient = new APIClient<Genre>('/genres')
const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 1d
    initialData: genres,
  })

export default useGenres
