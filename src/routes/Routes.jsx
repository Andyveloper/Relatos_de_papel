import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import RootLayout from './RootLayout'
import LandPage from '@src/pages/landpage/LandPage'

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
     {
        path: '/',
        element: <LandPage />,
      }
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
