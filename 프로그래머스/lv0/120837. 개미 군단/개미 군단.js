function solution(hp) {
    var answer = 0;
    const ants = [5,3,1]
    
    ants.forEach((ant,i) => {
        if(hp!==0){
            answer += parseInt(hp/ant)
            hp = hp%ant
        }
    })
    return answer;
}