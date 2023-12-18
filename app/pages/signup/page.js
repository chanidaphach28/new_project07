
import "./signup.css";
import Navbar from "@/components/Navbar";

export default function register_page(){
 
  return (<>
  <Navbar/>
  <div className="body">
    <div className="container">
        <div className="register-title">
        <form  className="register-form">
            <div className="title-font">
            Sign Up
            </div>
        
            <input 
            type="text" 
            placeholder="Username" className="username-box"/>
            <input 
            type="text" 
            placeholder="Email" className="email-box"/>
            
            <div className="name-form"  >
            <input className="firstname-box"  
            type="text" placeholder="Firstname" id="f_name" />

            <input className="lastname-box"
            type="text" placeholder="Lastname" id="l_name" />
            </div>

            <input type="text" placeholder="Tel." 
            
            className="tel-box"/>
            
            <input  
            type="password"  
            placeholder="Password" className="pw-box"/>
            
            <input 
            type="password"  
            placeholder="Confirm Password" className="pw-box"/>

            <div className="status-form" >

            <input className="r1-box" 
            type="radio"  name="status"  value="custommer"/>
            <label className="l1">customer</label>

            <input  className="r2-box"
            type="radio" name="status" value="seller"/>
            <label className="l2">seller</label>
            </div>
            <button className="re_btn" type="submit">
            Register
            </button>
        </form>
        </div>
    </div>
    </div>
    </>
  );
}