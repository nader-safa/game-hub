import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: '160efe636be240c29a9a96ce8167e50c' },
})

export default apiClient