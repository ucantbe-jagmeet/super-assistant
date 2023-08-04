import Navbar from "../components/Navbar";
import CategorySol from "../solutions/CategorySol";
import ComprehensionSol from "../solutions/ComprehensionSol";
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
          <ComprehensionSol />
        </div>
      </div>
    </>
  );
};

export default Preview;
