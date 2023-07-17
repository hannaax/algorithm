function solution(i, j, k) {
    var answer = 0;
    let numbers = []
    for(let n=i; n<=j;n++){
        numbers.push(n)
    }
    answer = numbers.join('').split(k).length-1
    return answer;
}