// for ([initialExpression]; [conditionExpression]; [incrementExpression])

// for (let i = 0; i < 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("Number " + i);
//   }
// }

// Nestes loops
// for (let i = 0; i < 10; i++) {
//   console.log("Number " + i);
//   for (let j = 0; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ["Rodrigo", "Charlie", "Sara", "Sam"];

for (let i = 0; i < names.length; i++) {
  if (names[i] == "Rodrigo") {
    console.log(names[i] + " is coding");
  } else {
    console.log(names[i]);
  }
}
