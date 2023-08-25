function solution(n) {
    var answer = 0;
    let nums = Array.from({length:n},(_,i)=>i+1)
    console.log(nums)
    
    let lt=0
    let rt=0
    let sum=0
    
    while(lt!==n){
        while(sum<n){
     sum += nums[rt]
        rt++
            if(sum===n) answer++
    }
    while(sum>=n){
        sum -= nums[lt] 
        lt++
        if(sum===n) {
            console.log(lt,rt)
            answer++ 
        } 
    }
    }
    console.log(sum,lt,rt)
    return answer;
}