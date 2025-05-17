import { createBrowserRouter } from 'react-router'
import Home from '@src/pages/home//Home'
import RootLayout from './RootLayout'
import Cart from '@src/pages/cart/Cart'

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
        path: '/cart',
        element: <Cart />,
      }
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
