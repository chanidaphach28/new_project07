import Link from "next/link";
import styles from "./Styles/navbar.module.css";


export default function Navbar(){
    return(
        <nav className={styles.navbar}>

                <div className={styles.topbar}> 
                        <span className={styles.logotab}>Logo</span>
                        <span></span>
                        <span>Searching</span>
                        <span className={styles.helptab}>help?</span>
                        <span className={styles.sign}>
                            <span>
                                 <Link href="/">sign in</Link>
                            </span>
                            <span>
                                <Link href="/">sign up</Link>
                            </span>

                        </span>



                </div>


                <div className={styles.menubar}>
                <span className={styles.menulist} >menu</span>
                    <Link href="/" className={styles.menulist}><span >Near me</span></Link>
                    <Link href="/" className={styles.menulist}><span >Roomtype</span></Link>
                    <Link href="/" className={styles.menulist}><span>Announcment</span></Link>
                    <Link href="/" className={styles.menulist}><span>Service</span></Link>
                    <Link href="/" className={styles.menulist}><span>Promotion</span></Link>
                    <Link href="/" className={styles.menulist}><span>About Us</span></Link>
                       
                </div>

        </nav>
    )
}