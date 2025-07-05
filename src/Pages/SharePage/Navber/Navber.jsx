import { Link } from "react-router-dom";


export default function Navber() {
  const NavLink = <>
  <Link to="/">Home</Link>
  </>;
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
             {NavLink}
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">daisyUI</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
           {NavLink}
          </ul>
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
             <Link className="mt-5 ml-5">Register</Link>
             <Link className="mt-5 ml-5">Login</Link>
             <button>Logout</button>
            </ul>
          </div>
          {/* profile end */}
        </div>
      </div>
    </div>
  );
}
