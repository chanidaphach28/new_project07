

import Navbar from "@/components/Navbar";
import styles from "./singin.module.css";
import Space from "@/components/SpaceTab";
import Footer from "@/components/Footer";

export default function SigIn(){
    return(
       <div className={styles.body}>
        <Navbar/>
        <div className={styles.container}>
<h1> hi</h1>
<form>
    <input type="text"></input>
</form>
        </div>
        <Space/>
        <Footer/>
       </div>
    )
}