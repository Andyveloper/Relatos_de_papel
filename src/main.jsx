import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './routes/Routes'
import { CartInfoProvider } from './contexts/cartInfoContext/cartInfoProvider'

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <CartInfoProvider>
      <RouterProvider router={router} />
    </CartInfoProvider>
  </StrictMode>
)
