function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}
function capitalize2(s) {
  return s[0].toUpperCase() + s.substring(1);
}
function capitalize3(s) {
  return `${s[0].toUpperCase()}${s.substring(1)}`;
}

const myString = "developer";
let myNewString;

myNewString = capitalize(myString);
myNewString = capitalize2(myString);
myNewString = capitalize3(myString);

console.log(myNewString);
