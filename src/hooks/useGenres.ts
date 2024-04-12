import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import { FetchResponse } from './useData'
import genres from '../data/genres'

export interface Genre {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 1d
    initialData: genres,
  })
// const useGenres = () => useData<Genre>('/genres')

export default useGenres
