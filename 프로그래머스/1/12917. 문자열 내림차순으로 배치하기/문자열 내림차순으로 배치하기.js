function solution(s) {
    let answer = '';
    
    answer = [...s].sort((a,b) => {
        if(a>b) return -1
        else if(a<b) return 1
        else return 0
    })
    
    answer = answer.join('')
    
    return answer;
}