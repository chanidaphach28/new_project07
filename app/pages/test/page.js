import Navbar from "@/components/Navbar";
import styles from "./test.module.css";
import Image from "next/image";
const getDors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/dormitory", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    else{
      console.log("Information complete")
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    else{
      console.log("User complete!")
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export default async function test(){
  const { dormitory } = await getDors();
  const { users} = await getUsers();
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
              ))}
              <hr/>



   </div>
    </div>
  )
}