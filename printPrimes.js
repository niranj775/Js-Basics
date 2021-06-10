function printPrimes(inp) {
  let n = +inp[0],
    res = [];
  for (let i = 1; i < n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) res.push(i);
  }
  return res;
}
let userInput = ["10"];
console.log(...printPrimes(userInput));
