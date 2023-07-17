function solution(a, b) {
    var answer = 0;
    let divisor = 0;
    for(let i=0; i<=1000; i++){
        if(a%i===0 && b%i===0) divisor = i
        if(i>a && i>b) break;
    }
    
    let denom = b/divisor
    let set = new Set()
    i=2
    while(denom>1){
        if(denom%i===0) {
            denom = denom/i
            set.add(i)
        }
        else i++
    }
    // console.log(set)
    [...set].filter((el)=>el!==2 && el!==5).length > 0 ? answer = 2 : answer = 1
    
    return answer;
}