function solution(d, budget) {
    let sum = 0
    let cnt = 0
    
    d.sort((a,b)=>a-b).forEach((price)=>{
        if(sum<budget){
            sum += price
            cnt++
        }
    })
    if(sum>budget) cnt--
    
    return cnt;
}