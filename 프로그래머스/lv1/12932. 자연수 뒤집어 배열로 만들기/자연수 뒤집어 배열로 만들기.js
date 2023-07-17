function solution(n) {
    var answer = [];
    answer = String(n).split("").reverse().map((el)=>Number(el))
    return answer;
}