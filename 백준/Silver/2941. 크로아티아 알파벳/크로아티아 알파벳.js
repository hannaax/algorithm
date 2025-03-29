let input = require("fs").readFileSync("/dev/stdin").toString().trim();

//console.log(input);

const alphabets = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let cnt = 0;
let currAlphabet = null;
while (input.length > 1 || !alphabets.includes(input)) {
  for (const alphabet of alphabets) {
    currAlphabet = alphabet;
    if (input.includes(alphabet)) {
      if (alphabet === "dz=") {
        input = input.split("dz=").join("*");
        //cnt++;
      } else if (alphabet !== "z=") {
        input = input.split(alphabet).join("*");
        //cnt++;
      } else {
        input = input.split(alphabet).join("*");
        break;
        //cnt++;
      }
    } else {
      continue;
    }
  }
  if (currAlphabet === "z=") break;
}
cnt += input.length;
console.log(cnt);
