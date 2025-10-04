console.log(addDollarSign(100));
// Function Declaration
function addDollarSign(value) {
  return "$" + value;
}
console.log(addPlusSign(200)); // Cannot access before initialization

// Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));
