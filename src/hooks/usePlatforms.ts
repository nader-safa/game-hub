import { useQuery } from '@tanstack/react-query'
import APIClient, { FetchResponse } from '../services/api-client'
import platforms from '../data/platforms'
import ms from 'ms'
import Platform from '../entities/Platform'

const apiClient = new APIClient<Platform>('/platforms')

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  })

export default usePlatforms
