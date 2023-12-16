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
      <div className={styles.homeimg}>
        <Image src="/condo_homepage.jpg" width={1180} height={300} alt="img"/>
      </div>


      <div className={styles.map}>
        Map
      </div>

      <div className={styles.roomcomponents}>
        Room conponents
      </div>

      <div>
        room recomment
      </div>





    </div>

    <Space/>
    <Footer/>
   </div>
  )
}
