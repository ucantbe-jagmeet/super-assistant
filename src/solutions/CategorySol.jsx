/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const CategorySol = () => {
  const { storeListData, categoryList } = useSelector((store) => store.form);

  const itemListData = storeListData.map((item) => ({
    id: item.id,
    item: item.itemsList,
  }));

  const [itemsList, setItemsList] = useState(itemListData);
  const [ansList, setAnsList] = useState(["ans 1", "ans 2", "ans 3"]);

  // save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // handle drag start for ans items
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  // handle drop for item containers
  const handleDrop = (e, index) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("text");
    const draggedItemContent = ansList[draggedIndex];

    // Add the dragged item content to the itemsList
    setItemsList((prevItemsList) => {
      const newItemsList = [...prevItemsList];
      console.log(newItemsList);
      newItemsList[index].push(draggedItemContent);

      return newItemsList;
    });

    // Remove the dragged item from the ansList
    setAnsList((prevAnsList) =>
      prevAnsList.filter((_, i) => i !== parseInt(draggedIndex))
    );
  };

  return (
    <div className="w-full h-auto  rounded-md px-10 py-5 border-2 border-grey-400">
      <h1 className="text-2xl font-semibold text-gray-600">Question 1</h1>

      <h2 className="text-gray-500 mt-5"> Categories</h2>
      <div className="flex justify-evenly">
        {itemsList.map((item, index) => {
          return (
            <h2
              key={index}
              className="h-9 w-52 border-2 rounded-md flex items-center justify-center  my-1 cursor-move capitalize"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
            >
              {item.item}
            </h2>
          );
        })}
      </div>
      <div className="flex justify-evenly mt-3">
        {categoryList.map((category, index) => {
          return (
            <div
              key={index}
              className=" bg-yellow-50 border-2 w-52 capitalize  rounded-md"
              style={{
                height: `${categoryList.length * 2.25}rem`,
              }}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => e.preventDefault()}
            >
              <h1 className="text-center">{category.category}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySol;
