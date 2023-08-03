/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const FillBlanks = () => {
  const [itemsList, setItemsList] = useState(["item 1", "item 2", "item 3"]);
  const [spanText, setSpanText] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "u") {
        underlineSelectedText();
      }
    };

    const underlineSelectedText = () => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed) {
        const range = selection.getRangeAt(0);

        const span = document.createElement("span");
        setSpanText(() => {
          let newText = span.textContent;
          return [...spanText, newText];
        });
        span.style.textDecoration = "underline";
        span.style.marginLeft = "2px";
        span.style.marginRight = "2px";
        range.surroundContents(span);
        selection.removeAllRanges();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400 mt-10 ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 2</h1>

      <h2 className="text-gray-500 mt-5"> Fill in the Blank</h2>

      <div className="flex justify-center flex-col">
        <div className="h-20 w-96  flex items-center pl-5 rounded-md my-1   border-2 outline-none">
          this is to select and make fill ups
        </div>
        {spanText.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="scale-125"
              />
              <label
                htmlFor="checked-checkbox"
                className="ml-2  text-gray-900 h-9 w-52 bg-green-100 flex items-center pl-5 rounded-sm my-1 "
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FillBlanks;
