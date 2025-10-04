const x = 100;
const foo = 1;
var bar = 2;

if (true) {
  const y = 200;
  console.log(x + y);
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700; // not block-scoped
}

console.log(c);

function run() {
  var d = 100; // function scoped, added to the window event object
  console.log(d);
}

run();

console.log(d);
