let input = require("fs").readFileSync("/dev/stdin").toString().trim();

//console.log(input);

let num = 2;

for (let i = 0; i < input; i++) {
  num += Math.pow(2, i);
}

console.log(num * num);
