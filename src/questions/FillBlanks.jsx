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
        span.style.textDecoration = "underline";
        span.style.marginLeft = "2px";
        span.style.marginRight = "2px";
        range.surroundContents(span);

        const underlinedText = span.textContent;

        // Add the underlined text with a checked property
        setSpanText((prevTexts) => [
          ...prevTexts,
          { text: underlinedText, isChecked: true },
        ]);

        selection.removeAllRanges();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle checkbox change to update isChecked property
  const handleCheckboxChange = (index, isChecked) => {
    setSpanText((prevTexts) => {
      const updatedTexts = [...prevTexts];
      updatedTexts[index].isChecked = isChecked;
      return updatedTexts;
    });
  };

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400 mt-10 ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 2</h1>

      <h2 className="text-gray-500 mt-5">Fill in the Blank</h2>

      <div className="flex justify-center flex-col">
        <div className="h-20 w-96  flex items-center pl-5 rounded-md my-1   border-2 outline-none">
          this is to select and make fill ups
        </div>
        {spanText.map((item, index) => {
          return (
            <div className="flex items-center" key={index}>
              <input
                checked={item.isChecked}
                id={`checked-checkbox-${index}`}
                type="checkbox"
                value=""
                className="scale-125"
                onChange={(e) => handleCheckboxChange(index, e.target.checked)}
              />
              <label
                htmlFor={`checked-checkbox-${index}`}
                className="ml-2  text-gray-900 h-9 w-52 bg-green-100 flex items-center pl-5 rounded-sm my-1 "
              >
                {item.text}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FillBlanks;
