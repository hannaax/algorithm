let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

//console.log(input);

const gradePoints = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let gradesMultiplyGradePoints = 0;
let grades = 0;
let gradePoint = 0;

input.forEach((subject) => {
  for (let point in gradePoints) {
    if (subject[2] === point) {
      gradePoint = gradePoints[point];
    }
  }
  if (subject[2] === "P") return;
  else {
    gradesMultiplyGradePoints += subject[1] * gradePoint;
    grades += +subject[1];
  }
});

const result = gradesMultiplyGradePoints / grades;
const roundedResult = Math.round(result * 1000000) / 1000000;
console.log(roundedResult);
