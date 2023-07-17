function solution(s){
    var answer = true;
    let cnt = 0;

    for(x of s.toLowerCase()){
        if(x=== "p") cnt++
        if(x=== "y") cnt--
    }
    if(cnt !== 0) answer=false 

    return answer;
}