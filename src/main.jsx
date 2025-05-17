import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { CartProvider } from './contexts/cartContext/cartProvider.jsx'
import './index.css'
import router from './routes/Routes'

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
