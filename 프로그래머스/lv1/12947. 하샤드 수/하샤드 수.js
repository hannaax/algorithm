function solution(x) {
    var answer = true;
    const origin = x
    let sum = 0
    while(x/10!==0){
        sum += x%10
        x = parseInt(x/10)
    }
    if(origin%sum!==0) return false
    return answer;
}