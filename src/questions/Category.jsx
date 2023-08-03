/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";

const Category = () => {
  const [itemsList, setItemsList] = useState(["item 1", "item 2", "item 3"]);
  const [ansList, setAnsList] = useState(["ans 1", "ans 2", "ans 3"]);

  // save refernce for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // const handle drag sort
  const handleSort = () => {
    //duplicate items
    let newItemsList = [...itemsList];

    // remove and save the dragged item content
    const draggedItemContent = newItemsList.splice(dragItem.current, 1)[0];

    //switch the position
    newItemsList.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setItemsList(newItemsList);
  };

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grya-400  ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 1</h1>

      <h2 className="text-gray-500 mt-5"> Categories</h2>
      <div className="flex justify-center flex-col">
        {itemsList.map((item, index) => {
          return (
            <h2
              key={index}
              className="h-9 w-52 bg-red-100 flex items-center pl-5 rounded-sm my-1 cursor-move"
              draggable
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              {item}
            </h2>
          );
        })}
        <input
          type="text"
          id="item"
          className="h-9 w-52  flex items-center pl-5 rounded-md my-1  text-white border-2"
          placeholder="Enter category ..."
          required
        />
        <button className="h-9 w-52 bg-blue-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white">
          + Create More
        </button>
      </div>

      {/* items and belong table  */}
      <div className=" bg-blue-50 mt-3 grid grid-cols-2 px-10 py-2">
        <div>
          <h2>Item</h2>
          {ansList.map((item, index) => {
            return (
              <h2
                key={index}
                className="h-9 w-52 bg-red-100 flex items-center pl-5 rounded-sm my-1 "
              >
                {item}
              </h2>
            );
          })}
        </div>
        <div>
          <h2>Belongs to</h2>
          {itemsList.map((item, index) => {
            return (
              <select
                key={index}
                name="itemSelect"
                value="value"
                id="itemSelect"
                onChange={() => console.log("handlechange occured")}
                className="h-9 w-52  flex items-center pl-5 rounded-sm my-1 outline-none "
              >
                {itemsList.map((itemValue, index) => {
                  return (
                    <option key={index} value={itemValue}>
                      {itemValue}
                    </option>
                  );
                })}
              </select>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
