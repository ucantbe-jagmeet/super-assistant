import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const SharedLayout = () => {
  return (
    <>
      <Aside />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;
