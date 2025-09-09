let x;

const name = "John";
const age = 31;

x = "Hello, my name is " + name + "and I am " + age + " years old.";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`;

// String Properties and methofs
const s = new String("Hello World"); // type object, rather than type string
x = typeof s;
x = s.length;

// Access value by key
x = s[1];

x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("e"); // first instance

x = s.substring(1, 4);
x = s.substring(7);
x = s.slice(-11, -6);
x = "       Hello World";
x = x.trim();
x = s.replace("World", "John");
x = s.includes("Hello");
x = s.valueOf();
x = s.split("");

console.log(x);
