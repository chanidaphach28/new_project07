import Navbar from "@/components/Navbar";
import styles from "./singin.module.css";
import Space from "@/components/SpaceTab";
import Footer from "@/components/Footer";

export default function SigIn() {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.container}>
        <form className={styles.signin_form}>
          <div className={styles.titlebox}>Sign In</div>

          <input
            className={styles.input_box}
            type="text"
            placeholder="username"
          />
          <input
            className={styles.input_box}
            type="password"
            placeholder="password"
          />
          <button className={styles.login_btn}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
