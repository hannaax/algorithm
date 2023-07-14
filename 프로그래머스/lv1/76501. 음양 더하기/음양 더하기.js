function solution(absolutes, signs) {
    var answer = 123456789;
    let values = []
    for(let i=0; i<signs.length; i++){
        signs[i]? values.push(+absolutes[i]) : values.push(-absolutes[i])
    }
    answer = values.reduce((acc,cur)=>acc+cur)
    return answer;
}