import { Link } from "react-router-dom";
import Logo from "./Logo";

import { AiOutlineForm } from "react-icons/ai";
import { TbMessage2Search } from "react-icons/tb";
const Aside = () => {
  return (
    <div className="h-screen w-full bg-blue-50">
      <div className="flex justify-center text-xl  h-16 items-center">
        <Logo className="" />
      </div>
      <hr />
      <div className="h-1/3 w-full flex items-center flex-col justify-evenly ">
        <Link to="/edit">
          <button
            className="hover:bg-white w-48
           text-[--primary-light-blue3] rounded-sm transition-all duration-200  border-b-2 text-lg flex items-center  py-2"
          >
            <AiOutlineForm className="mx-3 text-2xl" />
            Edit Form
          </button>
        </Link>
        <Link to="/preview">
          <button
            className="hover:bg-white w-48
           text-[--primary-light-blue3] rounded-sm transition-all duration-200  border-b-2 text-lg flex items-center py-2"
          >
            <TbMessage2Search className="mx-3 text-2xl" />
            Preview
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Aside;
