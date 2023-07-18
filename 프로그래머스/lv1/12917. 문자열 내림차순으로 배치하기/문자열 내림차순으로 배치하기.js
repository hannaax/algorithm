function solution(s) {
    var answer = '';
    let lower = []
    let upper = []
    for(let x of s){
        x !== x.toUpperCase()? lower.push(x) : upper.push(x)
    }
    console.log(lower,upper)
    answer = [...lower].sort().reverse().join('')+[...upper].sort().reverse().join('')
    return answer;
}