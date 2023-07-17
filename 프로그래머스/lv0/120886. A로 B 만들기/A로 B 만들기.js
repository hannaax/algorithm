function solution(before, after) {
    var answer = 1;
    for(let x of before){
        if(after.includes(x)) after = after.replace(x,"")
    }
    return after.length===0? 1:0
}