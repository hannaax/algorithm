function solution(n) {
    var answer = 0;
    const set = new Set()
    for(let i=4; i<=n; i++){
        if(i%2===0||i%3===0) set.add(i)
        else {
            for(let j=4; j<=i-1; j++){
            if(i%j===0) set.add(i)
        }
        }
    }
    
    return set.size;
}