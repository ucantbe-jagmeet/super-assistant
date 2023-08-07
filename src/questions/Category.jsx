/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { IoMdRemove } from "react-icons/io";

const Category = () => {
  const { categoryList, storeListData } = useSelector((store) => store.form);

  const [categoryListArr, setCategoryListArr] = useState(categoryList);
  const [categoryValue, setCategoryValue] = useState("");
  const [storeList, setStoreList] = useState(storeListData);
  const [storeListItemValue, setStoreListItemValue] = useState("");

  // save refernce for dragItem and dragOverItem
  const dragCategory = useRef(null);
  const dragOverCategory = useRef(null);
  // const handle drag sort
  const handleSort = () => {
    //duplicate categoryies
    let newCategoryList = [...categoryListArr];

    // remove and save the dragged item content
    const draggedCategoryContent = newCategoryList.splice(
      dragCategory.current,
      1
    )[0];
    //switch the position
    newCategoryList.splice(dragOverCategory.current, 0, draggedCategoryContent);

    // reset the position ref
    dragCategory.current = null;
    dragOverCategory.current = null;

    // update the actual array
    setCategoryListArr(newCategoryList);
  };

  const addStoreListItemValue = (itemName) => {
    let newObj = {
      id: new Date().getTime(),
      item: itemName,
      categoryList: categoryListArr,
    };
    const newItems = [...storeList, newObj];
    setStoreList(newItems);
  };
  const onStoreListItemBtn = () => {
    addStoreListItemValue(storeListItemValue);
    setStoreListItemValue("");
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

  const removeCategory = (id) => {
    const updatedList = categoryListArr.filter(
      (category) => category.id !== id
    );
    setCategoryListArr(updatedList);
  };
  const removeStoreListItem = (id) => {
    const updatedList = storeList.filter((list) => list.id !== id);
    setStoreList(updatedList);
  };

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400  ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 1</h1>

      <h2 className="text-gray-500 mt-5">
        Categories
        <span className="text-xs text-red-500">
          {" "}
          (*drag Categories to rearrange order)
        </span>
      </h2>
      <div className="flex justify-center flex-col">
        {categoryListArr.map((category, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={(e) => (dragCategory.current = category.id)}
              onDragEnter={(e) => (dragOverCategory.current = category.id)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <h2 className="h-9 w-52 bg-red-100 flex items-center px-5 rounded-sm my-1 justify-between cursor-move">
                {category.category}
                <div
                  className="text-md rounded-full bg-red-500 text-white cursor-pointer"
                  onClick={() => removeCategory(category.id)}
                >
                  <IoMdRemove />
                </div>
              </h2>
            </div>
          );
        })}
        <input
          type="text"
          id="category"
          name="category"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          className="h-9 w-52  flex items-center pl-5 rounded-md my-1  border-2"
          placeholder="Enter Category ..."
        />
        <button
          className="h-9 w-52 bg-blue-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white"
          onClick={onCategoryBtnClick}
          type="button"
        >
          + Add Category
        </button>
      </div>

      {/* items and belong table  */}
      <div className=" border-2 rounded-md mt-3  px-10 py-2">
        <div className="grid grid-cols-3 ">
          <h2>Items</h2>
          <h2>Belongs to</h2>
          <h2></h2>
        </div>
        <div>
          {storeList.map((list, index) => {
            const { id, categoryList, item } = list;
            return (
              <>
                <div className="grid grid-cols-3" key={index}>
                  <h2 className="h-9 w-52 bg-red-100 flex items-center pl-5 rounded-sm my-1 px-5   ">
                    {item}
                  </h2>
                  <div>
                    <select
                      key={item.id}
                      name="itemSelect"
                      value="value"
                      id="itemSelect"
                      onChange={() => console.log("handlechange occured")}
                      className="h-9 w-52  flex items-center pl-5 my-1 outline-none border-2 rounded-md"
                    >
                      {categoryList.map((category, index) => {
                        return (
                          <option key={index} value={category.category}>
                            {category.category}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div
                    className="text-md h-9 bg-red-500 text-white font-semi cursor-pointer  flex items-center  rounded-md w-fit px-2"
                    onClick={() => removeStoreListItem(id)}
                  >
                    remove
                  </div>
                </div>
              </>
            );
          })}
          <input
            type="text"
            id="item"
            name="item"
            value={storeListItemValue}
            onChange={(e) => setStoreListItemValue(e.target.value)}
            className="h-9 w-52 flex items-center pl-4 rounded-md my-2 border-2"
            placeholder="Enter item ..."
          />
          <button
            className="h-9 w-52 bg-green-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white"
            type="button"
            onClick={onStoreListItemBtn}
          >
            + Create item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
