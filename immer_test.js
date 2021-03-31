const { produce } = require("immer");

// const fruits = ["오렌지", "사과", "레몬", "바나나"];

// const newFruits = produce(fruits, draft => {
//     draft.splice(1, 2, "딸기");
// });

const baseState = [
    { todo: "Learn ES6+", done: true },
    { todo: "Try immer", done: false},
];

const newState1 = [
    ...baseState.map((tweet, index) =>
        index === 1 ? {...tweet, done: true} : tweet
    ),
    { todo: 'Tweet about it' },
];

const newState2 = produce(baseState, draft => {
    draft[1].done = true;
    draft.push({ todo: 'Tweet about it' });
});

console.log(newState1);
console.log(newState2)