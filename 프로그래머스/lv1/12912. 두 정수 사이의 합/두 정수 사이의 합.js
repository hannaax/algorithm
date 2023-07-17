function solution(a, b) {
    var answer = 0;
    if(a===b) return a
    let arr = [a,b].sort((a,b)=>a-b)
    a = arr[0]
    b = arr[1]
    answer = Array.from({length:Math.abs(b-a)+1}, (v,i)=>i+a).reduce((acc,cur)=>acc+cur)
    
    return answer;
}