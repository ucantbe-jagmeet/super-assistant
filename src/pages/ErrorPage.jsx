import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const ErrorPage = () => {
  return (
    <div className=" h-screen w-auto flex items-center justify-evenly flex-col">
      <img src={img} alt="not found" className="h-96" />
      <div>
        <h3 className="my-5 text-3xl">Ohh ! Page not Found</h3>

        <Link to="/" className="text-blue-400 px-4 py-1 border rounded-md ">
          Back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
