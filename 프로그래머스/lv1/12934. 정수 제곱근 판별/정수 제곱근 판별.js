function solution(n) {
    var answer = 0;
    Number.isInteger(Math.sqrt(n))? answer=Math.pow(Math.sqrt(n)+1,2) : answer=-1
    return answer;
}