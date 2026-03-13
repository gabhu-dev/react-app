import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
]

const router = createBrowserRouter(routes)

export default router
