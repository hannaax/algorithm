function solution(n) {
    var answer = 0;
    let dy = Array.from({legnth:n+1}, ()=>0);
    // dy[1] = 1;
    // dy[2] = 2;
    dy[1] = 1;
    dy[2] = 2;
    
    for(let i=3; i<=n; i++){
        dy[i] = (dy[i-2]+dy[i-1]) % 1234567
    }
    
    answer = dy[n]
    return answer;
}