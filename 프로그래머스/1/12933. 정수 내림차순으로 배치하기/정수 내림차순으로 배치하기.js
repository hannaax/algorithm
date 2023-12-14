function solution(n) {
    let answer = 0;

    answer = String(n).split('').map((el)=>Number(el)).sort((a,b)=>b-a).join('')
    answer = Number(answer)
    return answer;
}