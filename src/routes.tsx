import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import GameDetailPage from './pages/GameDetailPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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
