// eslint-disable-next-line react/prop-types
const Navbar = ({ text }) => {
  return (
    <>
      <div className="h-16 w-full bg-white">
        <div className="h-full w-fit  flex  justify-center flex-col  pl-10 ">
          <h1 className=" font-semibold text-gray-500 capitalize  text-xl md:text-3xl pr-10 pt-5 mb-1">
            {text}
          </h1>
          <hr className="w-10/5" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
