function solution(numbers, k) {
    var answer = 0;
    for(let i=0; i<k*2-2; i++) numbers.push(numbers.shift())
    answer = numbers.shift()
    return answer;
}