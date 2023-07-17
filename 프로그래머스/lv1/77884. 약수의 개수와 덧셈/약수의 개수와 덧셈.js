function solution(left, right) {
    var answer = 0;
    let cnt = 0
    let numbers = Array.from({length:right-left+1},(_,i)=>i+left)
    
    numbers.forEach((number)=>{
        cnt=0
        for(let i=1; i<=number; i++){
            if(number%i===0) cnt++
        }
        cnt%2===0? answer += number : answer -= number
    })
    return answer;
}