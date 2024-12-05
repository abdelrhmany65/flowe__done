import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import styles from'../pages/styles.module.css'


const Layout = () => {
  return (
    <>
      <Header /> 
        <main className={styles.topall}>
        <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout