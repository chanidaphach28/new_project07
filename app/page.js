import Image from 'next/image';
import styles from './page.module.css';
import Navbar from '@/components/Navbar';
import Map from "@/components/Map"
import Link from 'next/link';
import * as Minio from 'minio'


export default function Home() {

  return (
   <div className={styles.body}>
  <Navbar/>
    <div className={styles.container}>
      <div className={styles.homeimg}>
        <Image src="/condo_homepage.jpg" width={1239} height={350} alt="img"/>
      </div>


      <div className={styles.map}>
            <div className={styles.mapfunction}>

                      <div></div>
              
                <span className={styles.mapfunction1}><Link href="#">
                      LOCATION<br/>
                      <b>Ladkrabang ,1112</b> </Link>
                </span>
             

                      <div></div>

              <div className={styles.mapfunction2}>
                <div></div>
                <Link href="#">
                <div>EXPOLOR MORE </div> </Link><Link href="#">
                <Image src="/Building.png" width={40} height={40} alt='logo'></Image>
                </Link>
                <div></div>
                </div>

                        <div></div>

              <Link href="#">
                    <div className={styles.mapfunction3}>
                      see all
                    </div>
              </Link>

                <div></div>

            </div>

            <div className={styles.mapclass}>
               <Map/>
            </div>
      </div>
      
      <div className={styles.room_function}>
            
              <div className={styles.room_btn}>
                <Link href="/">Top Range</Link>
              </div>
            
            
              <div className={styles.room_btn}>
                <Link href="/">Suggest</Link>
              </div>
              
              <div></div>
      </div>


      <div className={styles.roomcomponents}>
        Room conponents
        <Link href="/pages/test"> <h1>WEBTEST</h1></Link>
      </div>

      <div>
        room recomment
      
      </div>
    </div>
   </div>
  )
}
