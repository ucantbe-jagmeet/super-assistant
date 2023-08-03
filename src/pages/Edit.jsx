/* eslint-disable no-unused-vars */

import Navbar from "../components/Navbar";
import Category from "../questions/Category";
import FillBlanks from "../questions/FillBlanks";

const Edit = () => {
  return (
    <>
      <div className="h-full w-full bg-red-50 overflow-auto">
        <div>
          <Navbar text="edit form" />
        </div>
        <div className="h-auto p-10 ">
          <Category />
          <FillBlanks />
        </div>
      </div>
    </>
  );
};

export default Edit;
