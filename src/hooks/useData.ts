import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface FetchResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

    return () => controller.abort()
  }, [endPoint])

  return {
    data,
    error,
    isLoading,
  }
}

export default useData