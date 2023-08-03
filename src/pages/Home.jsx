import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";

const Home = () => {
  return (
    <main className="h-screen w-screen flex">
      <div className="w-1/6">
        <Aside />
      </div>
      <di className="w-5/6">
        <Outlet />
      </di>
    </main>
  );
};

export default Home;
