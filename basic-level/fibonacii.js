function fibonacii(num) {
  let first = 0;
  let second = 1;
  let series = [];
  for (let i = 0; i < num; i++) {
    series.push(first);
    let temp = first + second;
    first = second;
    second = temp;
  }

  return series;
}

console.log(fibonacii(10));
