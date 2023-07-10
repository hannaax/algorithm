function solution(n) {
    const numbers = Array.from({length:n},(_,i)=>i+1)
    const answer = numbers.find(number => n%number===1)
    return answer;
}