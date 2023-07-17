function solution(nums) {
    var answer = 0;
    // answer === nums/2
    let map = new Map()
    
    for(let x of nums){
        if(!map.has(x)) {
            map.set(x,1)
            if(answer < nums.length/2) answer++
        } 
    }
    console.log(map)
    return answer;
}