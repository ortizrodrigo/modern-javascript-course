const getCelsius = (T) => (5 / 9) * (T - 32);

console.log(getCelsius(45));

const minMax = (numbers) => ({
  min: Math.min(...numbers),
  max: Math.max(...numbers),
});

console.log(minMax([1, 2, 3, 4, 5, 4, 1, 2, 4, 5, 6, 8, 7, 5, 54, 12]));

(function (l, w) {
  console.log(`The area of a rectangle with length of ${l} and a width of ${w} is ${l * w}.`);
})(3, 4);
