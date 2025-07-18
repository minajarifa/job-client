import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import navberIcons from "../../../../public/download.png"


export default function Navber() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignInOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire("Logout successfully!")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const NavLink = (
    <>
     <li> <Link to="/">Home</Link></li>
     <li> <Link to="/My_Application_Jobs">My application jobs</Link></li>
     <li> <Link to="/Add_Job">Add Job</Link></li>
    </>
  );
  return (
    <div>
      {/*  */}
      <div className="shadow-sm navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {NavLink}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">
            <img className="w-8 h-8 " src={navberIcons} alt="" />
            Job Portal</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{NavLink}</ul>
        </div>
        <div className="navbar-end">
          {/* profile start */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/27rSBcKC/download.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {user ? (
                <>
                  <button onClick={handleSignInOut}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/register" className="mt-5 ml-5">
                    Register
                  </Link>
                  <Link to="/login" className="mt-5 ml-5">
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
          {/* profile end */}
        </div>
      </div>
    </div>
  );
}