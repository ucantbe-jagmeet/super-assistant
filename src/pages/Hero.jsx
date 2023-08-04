/* eslint-disable no-unused-vars */
import img from "../assets/images/main.svg";
import Navbar from "../components/Navbar";
const Hero = () => {
  return (
    <div className="h-full w-full overflow-auto z-0">
      <div>
        <Navbar text="Home" />
      </div>
      <div className="h-[90vh] p-20 grid grid-cols-2 items-center ">
        <h2 className="w-9/12 ml-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
          maiores quod, animi dignissimos enim odit ipsa iusto reprehenderit
          commodi nisi!
        </h2>

        <img src={img} alt="main image" className="" />
      </div>
    </div>
  );
};

export default Hero;
