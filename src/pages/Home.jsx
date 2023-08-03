import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="h-screen w-screen bg-red-50 grid grid-cols-7">
      <div>
        <Aside />
      </div>
      <div className="">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
