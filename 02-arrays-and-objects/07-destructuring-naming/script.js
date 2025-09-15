const firstName = "John";
lastName = "Doe";
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// if this: is_the_same_as_this, then write
const person = {
  firstName,
  lastName,
  age,
};

// Destructuring

const todo = {
  id: 1,
  title: "Take out the trash",
  user: {
    name: "Rodrigo",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
