/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import questionsList from "../../questionsList";

const ComprehensionSol = () => {
  const [questions, setQuestions] = useState(questionsList);

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400 mt-10 ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 3</h1>
      <h2 className="text-gray-500 mt-5">Multiple Choice Questions</h2>

      <div className="flex justify-center flex-col">
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <div key={index} className="bg-blue-50 rounded-md my-5 px-5 py-2">
              <h4>Question {index + 1}</h4>
              <div className="h-9 w-96  flex items-center pl-2 rounded-md  font-semibold text-lg outline-none">
                {question.question} ?
              </div>
              <br />
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex">
                  <input
                    type="radio"
                    name={`question${index}`} // Use a unique name for each group of radio buttons
                    value={optionIndex}
                    className="scale-125"
                    checked={question.correctAnswer === optionIndex}
                  />
                  <div className="h-9 w-96  flex items-center pl-3 pb-1 rounded-md my-1  text-md outline-none">
                    {option}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensionSol;
