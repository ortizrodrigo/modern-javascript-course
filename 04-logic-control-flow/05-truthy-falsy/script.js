// const email = "test@test.com";

// if (email) {
//   console.log("You passed in an email");
// }

const x = function () {};

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
const posts = ["Post One", "Post Two"];

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts to List");
}

// Checking for empty objects
const user = {
  name: "Rodrigo",
};

if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log(false === 0);
