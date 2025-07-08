import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import loginLottieData from "../../../public/registerLottie/loginLottee.json.json";
import Swal from "sweetalert2";
export default function Login() {
   const {signInUser} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // password validation
    const userUnfo={
        email, password
    }
    signInUser(email,password)
    .then(result=>{
      console.log(result.user)
      if(result.user){
        Swal.fire("Login Successfully!")
      }
    })
    .catch(error=>{
      console.log(error)
    })
  };
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={loginLottieData}></Lottie>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <h1 className="mt-4 ml-8 text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <button className="mt-4 btn btn-neutral">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
