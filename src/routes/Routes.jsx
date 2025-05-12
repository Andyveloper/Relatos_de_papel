import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import RootLayout from './RootLayout'

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      }
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
