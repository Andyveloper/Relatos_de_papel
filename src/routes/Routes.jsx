import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import BookDetail from '@src/pages/bookdetail/BookDetail'
import RootLayout from './RootLayout'
import CheckOut from '@src/pages/checkOut/checkOut'
import Cart from '@src/pages/cart/Cart'
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
        path: '/checkout',
        element: <CheckOut />,
      },
      {
        path: '/cart',
        element: <Cart />,
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
