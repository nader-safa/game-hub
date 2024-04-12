import { useQuery } from '@tanstack/react-query'
import { FetchResponse } from './useData'
import { Platform } from './useGames'
import apiClient from '../services/api-client'
import platforms from '../data/platforms'

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  })

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms
