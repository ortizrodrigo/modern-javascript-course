x = Math.ceil(Math.random() * 100);
y = Math.ceil(Math.random() * 50);
sum = x + y;
diff = x - y;
prod = x * y;
quot = x / y;
rm = x % y;

console.log(`${x} + ${y} = ${sum}`);
console.log(`${x} - ${y} = ${diff}`);
console.log(`${x} * ${y} = ${[prod]}`);
console.log(`${x} / ${y} = ${quot}`);
console.log(`${x} % ${y} = ${rm}`);
