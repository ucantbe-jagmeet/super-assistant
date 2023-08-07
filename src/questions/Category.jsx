/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { IoMdRemove } from "react-icons/io";

const Category = () => {
  const { categoryList, itemsList } = useSelector((store) => store.form);

  const [itemsListArr, setItemsListArr] = useState(itemsList);
  const [categoryListArr, setCategoryListArr] = useState(categoryList);
  const [itemValue, setItemValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  // save refernce for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  // const handle drag sort
  const handleSort = () => {
    //duplicate items
    let newItemsList = [...itemsListArr];
    // remove and save the dragged item content
    const draggedItemContent = newItemsList.splice(dragItem.current, 1)[0];
    //switch the position
    newItemsList.splice(dragOverItem.current, 0, draggedItemContent);

    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setItemsListArr(newItemsList);
  };

  const addItemValue = (itemName) => {
    let idArr = itemsListArr.map((e) => e.id);
    let maxElemId = Math.max(...idArr);
    let newObj = { id: maxElemId + 1, item: itemName };
    const newItems = [...itemsListArr, newObj];
    setItemsListArr(newItems);
  };
  const onItemBtnClick = () => {
    addItemValue(itemValue);
    setItemValue("");
  };

  const addCategoryValue = (categoryName) => {
    let newObj = { id: new Date().getTime(), category: categoryName };
    const newCategories = [...categoryListArr, newObj];
    setCategoryListArr(newCategories);
  };

  const onCategoryBtnClick = () => {
    addCategoryValue(categoryValue);
    setCategoryValue("");
  };

  const removeItem = (id) => {
    const updatedList = itemsListArr.filter((item) => item.id !== id);
    setItemsListArr(updatedList);
  };
  const removeCategory = (id) => {
    const updatedList = categoryListArr.filter(
      (category) => category.id !== id
    );
    setCategoryListArr(updatedList);
  };

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400  ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 1</h1>

      <h2 className="text-gray-500 mt-5"> Items</h2>
      <div className="flex justify-center flex-col">
        {itemsListArr.map((item) => {
          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => (dragItem.current = item.id)}
              onDragEnter={(e) => (dragOverItem.current = item.id)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <h2 className="h-9 w-52 bg-red-100 flex items-center px-5 rounded-sm my-1 justify-between cursor-move">
                {item.item}
                <div
                  className="text-md rounded-full bg-red-500 text-white cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  <IoMdRemove />
                </div>
              </h2>
            </div>
          );
        })}
        <input
          type="text"
          id="item"
          name="item"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
          className="h-9 w-52  flex items-center pl-5 rounded-md my-1  border-2"
          placeholder="Enter items ..."
        />
        <button
          className="h-9 w-52 bg-blue-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white"
          onClick={onItemBtnClick}
          type="button"
        >
          Save
        </button>
      </div>

      {/* items and belong table  */}
      <div className=" border-2 rounded-md mt-3 grid grid-cols-2 px-10 py-2">
        <div>
          <h2>Category</h2>
          {categoryListArr.map((category) => {
            return (
              <h2
                key={category.id}
                className="h-9 w-52 bg-red-100 flex items-center pl-5 rounded-sm my-1 px-5 justify-between  "
              >
                {category.category}
                <div
                  className="text-md rounded-full bg-red-500 text-white font-semi cursor-pointer"
                  onClick={() => removeCategory(category.id)}
                >
                  <IoMdRemove />
                </div>
              </h2>
            );
          })}
          <input
            type="text"
            id="category"
            name="category"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
            className="h-9 w-52 flex items-center pl-4 rounded-md my-2 border-2"
            placeholder="Enter Category ..."
          />
          <button
            className="h-9 w-52 bg-green-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white"
            type="button"
            onClick={onCategoryBtnClick}
          >
            + Create More
          </button>
        </div>
        <div>
          <h2>Belongs to</h2>
          {/* {itemsListArr.map((item) => {
            return (
              <select
                key={item.id}
                name="itemSelect"
                value="value"
                id="itemSelect"
                onChange={() => console.log("handlechange occured")}
                className="h-9 w-52  flex items-center pl-5 my-1 outline-none border-2 rounded-md"
              >
                {itemsListArr.map((itemValue) => {
                  return (
                    <option key={itemValue.id} value={itemValue.item}>
                      {itemValue.item}
                    </option>
                  );
                })}
              </select>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Category;
