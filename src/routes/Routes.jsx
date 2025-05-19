import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import BookDetail from '@src/pages/bookDetail/BookDetail'
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
        path: '/book/:id',
        element: <BookDetail />,
      },
      {
        path: '/',
        element: <LandPage />,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
