import Navbar from '@src/components/globalComponents/Navbar'
import Footer from '@src/components/globalComponents/Footer'
import { Outlet } from 'react-router'
import { CartInfoProvider } from '@src/contexts/cartInfoContext/cartInfoProvider'


const RootLayout = () => {
  return (
    <>
    <CartInfoProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </CartInfoProvider>
    </>
  )
}

export default RootLayout
