function solution(array) {
    var answer = 0;
    let map = new Map()
    let cnt = -1;
    for(let x of array){
        if(!map.has(x)) map.set(x, 1)
        else {
            map.set(x, map.get(x)+1)
        }
        if(map.get(x)>cnt) {
                answer=x
                cnt=map.get(x)
            }
    }
    map.delete(answer)
    for(let value of map.values()){
        if(value===cnt) answer = -1
    }
    
    
    
    return answer;
}