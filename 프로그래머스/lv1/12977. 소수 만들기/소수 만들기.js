function checkPrime(sum) {
    if(sum%2 === 0) return false;
    else if(sum%3 === 0) return false;
    else{
        for(let i=5; i<=Math.sqrt(sum); i++){
        if(sum%i === 0) return false; 
    }
    }
    return true
}

function solution(nums) {
    var answer = 0;
    let num = 1
    let cnt = 0
    
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k]
                if(checkPrime(sum)){
                    console.log(sum)
                    cnt++
                    num++
                    answer++
                }
                // else num++
            }
        }
    }
    console.log(cnt, num)
    return answer;
}