/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const FillBlanksSol = () => {
  const [itemsList, setItemsList] = useState(["item 1", "item 2", "item 3"]);
  const [spanText, setSpanText] = useState([]);
  const [question, setQuestion] = useState(
    "this is to select and make fill ups"
  );

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

      <div className="h-12 flex items-center bg-yellow-50 pl-5 mt-5 border rounded-sm">
        <h1>{question}</h1>
      </div>
    </div>
  );
};

export default FillBlanksSol;
