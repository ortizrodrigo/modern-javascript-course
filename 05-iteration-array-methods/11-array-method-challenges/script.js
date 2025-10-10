const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((p) => p.age <= 25)
  .map((p) => ({
    name: p.firstName + " " + p.lastName,
    email: p.email,
  }));

console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

positiveSum = numbers.filter((n) => n > 0).reduce((sum, num) => sum + num, 0);
console.log(positiveSum);

const words = ["coder", "programmer", "developer"];
capitalizedWords = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
console.log(capitalizedWords);
