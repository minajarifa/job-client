import Lottie from "lottie-react";
import registerLottieData from "../../../public/registerLottie/lotte.json.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import SocialLogi from "../SharePage/SocialLogin/SocialLogi";
export default function Register() {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // password validation
    const userUnfo={ 
      name, photo,  email, password
    }
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      if(result.user){
        Swal.fire("Register Successfully!")
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
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
          <h1 className="mt-4 ml-8 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              <div>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="User Name"
                  name="name"
                />
              </div>
              <div>
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="PhotoURL"
                  name="photo"
                />
              </div>
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
              <button className="mt-4 btn btn-neutral">Register</button>
            </fieldset>
          </form>
          <hr />
        <div className="my-5 ml-5">
            <SocialLogi></SocialLogi>
        </div>
        </div>
      </div>
      
      
    </div>
  );
}
