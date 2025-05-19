import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import BookDetail from '@src/pages/bookdetail/BookDetail'
import RootLayout from './RootLayout'

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
      }
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
