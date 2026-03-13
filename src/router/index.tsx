import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'
import FavoritesPage from '../pages/FavoritesPage'
import MainLayout from '../components/layout/MainLayout'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/details/:id',
        element: <DetailsPage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />,
      },
    ]
  },
]

const router = createBrowserRouter(routes)

export default router
