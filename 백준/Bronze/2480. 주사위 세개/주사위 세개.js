let input = require("fs").readFileSync('/dev/stdin').toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

const arr = [a, b, c];

// console.log(a, b, c);

const set = new Set(arr);

// console.log(set.size);

const values = set.values();

// console.log(values.next().value);

let answer = null;
if (set.size === 1) {
  answer = 10000 + values.next().value * 1000;
} else if (set.size === 2) {
  const arr2 = [];
  let sameValue = null;
  for (const num of arr) {
    if (!arr2.includes(num)) arr2.push(num);
    else sameValue = num;
  }
  answer = 1000 + sameValue * 100;
} else if (set.size === 3) {
  const sortArr = arr.sort();
  answer = sortArr[2] * 100;
}
console.log(answer);
