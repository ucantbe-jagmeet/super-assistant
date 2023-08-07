const questionsList = [
  {
    question: "What is the color of an apple",
    options: ["green", "red", "blue", "yellow"],
    correctAnswer: "red",
  },
  {
    question: "What is the color of an orange",
    options: ["green", "red", "orange", "yellow"],
    correctAnswer: "orange",
  },
];

const categoryList = [
  { id: 0, category: "item 1" },
  { id: 1, category: "item 2" },
  { id: 2, category: "item 3" },
];
const itemsList = [{ id: 0, item: "ans 1" }];

const storeListData = [
  {
    id: 1,
    itemsList: "ans 1",
    categoryList: [{ id: 0, category: "item 1" }],
  },
];
export { questionsList, itemsList, categoryList, storeListData };
