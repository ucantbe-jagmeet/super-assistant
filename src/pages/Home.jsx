import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
const Home = () => {
  return (
    <main className="h-screen w-screen flex">
      <div className="w-1/6">
        <Aside />
      </div>
      <div className="w-5/6">
        <Outlet />
      </div>
    </main>
  );
};

export default Home;
