/* eslint-disable no-unused-vars */

import React, { useState } from "react";

const Comprehension = () => {
  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: null,
    },
  ]);

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][name] = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const { value } = e.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].options[optionIndex] = value;
      return updatedQuestions;
    });
  };

  const handleCorrectAnswerChange = (e, index) => {
    const { value } = e.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].correctAnswer = parseInt(value, 10);
      return updatedQuestions;
    });
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: null,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions.splice(index, 1);
      return updatedQuestions;
    });
  };

  return (
    <div className="w-full h-auto bg-white rounded-md px-10 py-5 border-2 border-grey-400 mt-10 ">
      <h1 className="text-2xl font-semibold text-gray-600">Question 3</h1>
      <h2 className="text-gray-500 mt-5">Multiple Choice Questions</h2>
      <div className="flex justify-center flex-col">
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <div key={index} className="bg-blue-50 rounded-md my-5 p-5">
              <h4>Question {index + 1}</h4>
              <input
                type="text"
                name="question"
                value={question.question}
                className="h-9 w-96  flex items-center pl-2 rounded-md my-1 text-gray-800 border-2"
                onChange={(e) => handleQuestionChange(e, index)}
              />
              <br />
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex">
                  <input
                    type="radio"
                    name={`question${index}`} // Use a unique name for each group of radio buttons
                    value={optionIndex}
                    className="scale-125"
                    checked={question.correctAnswer === optionIndex}
                    onChange={(e) => handleCorrectAnswerChange(e, index)}
                  />
                  <input
                    type="text"
                    value={option}
                    className="h-9 w-96 ml-2 flex items-center pl-2 rounded-md my-1 text-gray-800 border-2"
                    onChange={(e) => handleOptionChange(e, index, optionIndex)}
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemoveQuestion(index)}
                  className="h-9 w-52 bg-red-400 flex items-center pl-5 rounded-md my-2 font-semibold text-white"
                >
                  Remove Question
                </button>
              </div>
              <hr />
            </div>
          ))}
          <button
            onClick={handleAddQuestion}
            className="h-9 w-52 bg-blue-400 flex items-center justify-center pl-5 rounded-md my-2 font-semibold text-white"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comprehension;
