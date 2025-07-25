import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/SharePage/Footer/Footer";
import Navber from "./Pages/SharePage/Navber/Navber";

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navber />
      <div className="my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
