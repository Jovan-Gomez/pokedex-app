import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div className='w-full  max-w-7xl mx-auto p-8 '>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
