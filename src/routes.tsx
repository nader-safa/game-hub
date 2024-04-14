import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import GameDetailPage from './pages/GameDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games',
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: ':id',
            element: <GameDetailPage />,
          },
        ],
      },
    ],
  },
])

export default router
