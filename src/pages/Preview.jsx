import Navbar from "../components/Navbar";
import CategorySol from "../solutions/CategorySol";
import FillBlanksSol from "../solutions/FillBlanksSol";

const Preview = () => {
  return (
    <>
      <div className="h-full w-full  overflow-auto">
        <div>
          <Navbar text="Preview form" />
        </div>
        <div className="h-auto p-10 ">
          <CategorySol />
          <FillBlanksSol />
        </div>
      </div>
    </>
  );
};

export default Preview;
