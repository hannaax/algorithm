function solution(n) {
    let set = new Set()
    let i=2
    while(n/i!==1){
        if(n%i===0){
            set.add(i)
            n = n/i
        }
        else i++
    }
    set.add(i)
    console.log(set)
    return [...set].sort((a,b)=>a-b);
}