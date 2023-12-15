import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Space from '@/components/SpaceTab'

export default function Home() {
  return (
   <div className={styles.body}>
    <Navbar/>
    <div className={styles.container}>
      <h1>homepage</h1>
    </div>
    <Space/>
    <Footer/>
   </div>
  )
}
