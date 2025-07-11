import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

export default function () {
  const { googleLogin } = useContext(AuthContext);
  const googleLoginNow=()=>{
    googleLogin()
   .then(result=>{
         console.log(result.user)
         if(result.user){
           Swal.fire("Login Successfully!")
         }
       })
       .catch(error=>{
         console.log(error)
       })

  }

  return (
    <div>
      {/* Google */}
      <button 
      onClick={googleLoginNow}
      className="btn bg-white text-black border-[#e5e5e5]">
      <FcGoogle />
        Login with Google
      </button>
    </div>
  );
}
