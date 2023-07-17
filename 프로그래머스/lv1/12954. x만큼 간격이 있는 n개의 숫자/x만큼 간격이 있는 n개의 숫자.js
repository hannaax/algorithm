function solution(x, n) {
    var answer = [];
    let i = x
        while(answer.length<n){
            answer.push(i)
            i += x
        }
    return answer;
}