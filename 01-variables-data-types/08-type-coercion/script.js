let x;

x = 5 + "5"; // string

x = 5 + Number("5"); // number

x = 5 * "5"; // number

x = 5 + null; // number

x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true; // number
x = 5 + false; // number

x = 5 + undefined; // number

console.log(x, typeof x);
