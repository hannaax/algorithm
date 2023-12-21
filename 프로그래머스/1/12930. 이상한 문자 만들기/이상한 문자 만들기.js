function solution(s) {
    var answer = '';
    
    s.split(' ').forEach((el) => {
        const word = el.split('')
        word.forEach((el,i) =>
                     i%2===0? answer += el.toUpperCase() : answer += el.toLowerCase()
                    )
                     answer += ' '
    })
//     answer = answer.trimEnd()
    
//     return answer;
    return answer.slice(0,-1);
}