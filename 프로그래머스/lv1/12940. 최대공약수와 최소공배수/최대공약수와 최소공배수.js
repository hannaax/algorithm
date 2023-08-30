function solution(n, m) {
    var answer = [];
    let nums = [n,m].sort((a,b)=>a-b)
    n = nums[0], m = nums[1]
    for(let i=1; i<=m; i++){
        if(n%i === 0 && m%i === 0) answer[0] = i
    }
    
    if(answer[0] === 1) answer[1] = n*m
    else {
        answer[1] = answer[0]*(n/answer[0])*(m/answer[0])
    }
    return answer;
}