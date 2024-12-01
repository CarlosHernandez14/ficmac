import Image from "next/image";
import MailBtn from "./components/MailBtn-Test";
import { signOut } from "@/auth";
import PaypalBtn from "./components/paypal/paypal-btn";
import UploadImage from "./components/tests/upload";
import Principal from "./components/Home/Principal";

export default function Home() {

  const handleLogout = async () =>{
    "use server"

    await signOut()
  }
  

  return (
    <div className="">
   
        <button onClick={handleLogout}>Logout</button>
        <Principal/>
        {/* <PaypalBtn />*/}
       {/*<UploadImage /> */}
      
    
    </div>
  );
}
