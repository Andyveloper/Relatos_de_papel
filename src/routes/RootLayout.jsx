import Navbar from '@src/components/globalComponents/Navbar'
import Footer from '@src/components/globalComponents/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
