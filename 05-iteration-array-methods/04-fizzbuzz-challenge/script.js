for (let i = 1; i <= 100; i++) {
  const fizz = i % 3 == 0 ? "Fizz" : "";
  const buzz = i % 5 == 0 ? "Buzz" : "";
  console.log(i, fizz + buzz);
}
