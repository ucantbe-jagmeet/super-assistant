import Navbar from "../components/Navbar";
import Category from "../questions/Category";

const Edit = () => {
  return (
    <>
      <div className="h-full w-full  bg-red-50">
        <div>
          <Navbar text="edit form" />
        </div>
        <div className="h-auto p-10 ">
          <Category />
        </div>
      </div>
    </>
  );
};

export default Edit;
