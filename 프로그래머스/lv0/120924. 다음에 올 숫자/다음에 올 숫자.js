function solution(common) {
    var answer = 0;
    let minus= common[1]-common[0]
    let divide= common[1]/common[0]
    let n = common.length
    
    for(let i=1; i<n; i++){
        if(minus !== common[i+1]-common[i]){
            answer = common[n-1]*divide
            break;
        }
        else {
            answer = common[n-1]+minus
            break;
        }
        
        
    }
    return answer;
}