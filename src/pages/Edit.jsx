/* eslint-disable no-unused-vars */

import Navbar from "../components/Navbar";
import Category from "../questions/Category";
import Comprehension from "../questions/Comprehension";
import FillBlanks from "../questions/FillBlanks";

const Edit = () => {
  return (
    <>
      <div className="h-full w-full  overflow-auto z-10 ">
        <div>
          <Navbar text="edit form" />
        </div>
        <div className="h-auto p-10 ">
          <Category />
          <FillBlanks />
          <Comprehension />
        </div>
      </div>
    </>
  );
};

export default Edit;
