import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[--primary-light-blue6] flex items-center justify-center flex-col font-mono ">
        <h1 className="text-4xl  uppercase font-semibold text-gray-400 md:text-4xl">
          Super Assistant Developers
        </h1>
        <Link to="/">
          <button className="mt-5 px-5 py-1 bg-[--primary-light-blue4] rounded-md text-white capitalize font-serif tracking-widest">
            lets go...🚀
          </button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
