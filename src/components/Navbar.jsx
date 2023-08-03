const Navbar = ({ text }) => {
  return (
    <>
      <div className="h-16 w-full bg-white">
        <div className="h-full w-fit  flex  justify-center flex-col  pl-10 ">
          <h1 className=" font-semibold text-gray-500 capitalize  text-xl md:text-2xl pr-10 ">
            {text}
          </h1>
          <hr className="w-10/5" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
