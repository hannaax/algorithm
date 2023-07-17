function solution(s) {
    var answer = [];
    let distance = -1;
    for(let i=0; i<s.length; i++){
        distance = -1;
        for(let j=0; j<=i-1; j++){
            if(s[i]===s[j]) {
                if(distance>i-j) answer.pop()
                distance = i-j
                answer.push(i-j)
            }
        }
        if(distance===-1) answer.push(distance)
    }
    return answer;
}