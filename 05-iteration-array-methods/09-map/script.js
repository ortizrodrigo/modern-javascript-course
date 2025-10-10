const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((n) => n * 2);

console.log(doubledNumbers);

// Same with forEach

const doubleNumbers2 = [];

numbers.forEach((n) => {
  doubleNumbers2.push(n * 2);
});

console.log(doubleNumbers2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names
companyNames = companies.map((c) => c.name);
// console.log(companyNames);

// Create an array with just company name and category
companyInfo = companies.map((c) => ({
  name: c.name,
  category: c.category,
}));
// console.log(companyInfo);

// Create an array of objects with the name a length of each company in years
companyLengths = companies.map((c) => ({
  name: c.name,
  length: c.end - c.start,
}));
// console.log(companyLengths);

// Chain map methods
const squareRootAndDouble = numbers.map((n) => Math.sqrt(n)).map((sqrt) => sqrt * 2);

const squareRootAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });

console.log(squareRootAndDouble);
console.log(squareRootAndDouble2);

// Chaining different methods
const evenDouble = numbers.filter((n) => n % 2 === 0).map((n) => n * 2);

console.log(evenDouble);
