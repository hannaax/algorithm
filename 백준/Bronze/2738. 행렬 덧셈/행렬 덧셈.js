let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//console.log(input);

for (let i = 0; i < input[0][0]; i++) {
  for (let j = 0; j < input[0][1]; j++) {
    console.log(input[i + 1][j] + input[input[0][0] + (i + 1)][j]);
  }
}