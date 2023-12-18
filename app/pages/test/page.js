import Navbar from "@/components/Navbar";
import styles from "./test.module.css";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    else{
      console.log("ok , now webpage's connecting")
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function test(){
  const {users } = await getUsers();

  return(
    
    <div className={styles.body}>
    <Navbar/>
   <div className={styles.container}> 

    <h1> hello test</h1>

    {users.map((u) => (
      <div key={u._id}>
          <div className={styles.roomBox}>
            username:{u.username}<br/>
            password:{u.password}
            <hr/>
          </div>
      </div>
    ))

    }



   </div>
    </div>
  )
}