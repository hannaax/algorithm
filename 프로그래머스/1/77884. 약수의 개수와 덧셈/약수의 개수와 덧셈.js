function solution(left, right) {
    let answer = 0;
    
    const nums = Array.from({length:right-left+1},(v,i)=>i+left)

    nums.forEach((num)=>{
    let cnt = 0;
    for(let i=1; i<=Math.sqrt(num); i++){
        if (num % i === 0) {
            cnt++;
            if (num / i !== i) cnt++;
        }
    }
    cnt%2===0? answer+=num: answer-=num
    })
    
    return answer;
}