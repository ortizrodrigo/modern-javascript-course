const arr = [24, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();
// arr.unshift(99); //appendleft
// arr.shift(); // popleft
// arr.reverse();
x = arr.includes(200);
x = arr.indexOf(340);
x = arr.slice(1, 4); // does not mutate the array
// x = arr.splice(1, 4); // mutates the array (removes 1 through 4)
// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);
