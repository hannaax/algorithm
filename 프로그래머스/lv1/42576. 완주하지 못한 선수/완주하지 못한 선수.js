function solution(participant, completion) {
    var answer = '';
    
    // hash말고 고차함수를 써서 해결할 수 있는지 궁금
    
    let map = new Map()
    for(let x of participant){
        if(map.get(x)!==undefined) map.set(x,map.get(x)+1)
        else map.set(x,1)
    }
    
    for(let x of completion){
        map.set(x,map.get(x)-1)
    }
    
    for(let [key,value] of map){
        if(value===1) answer = key
    }
    
    return answer;
}