function solution(x) {
    const arr = String(x).split('').map((el)=>Number(el))
    const sum = arr.reduce((a,b)=>Number(a)+Number(b))
    return Number.isInteger(x/sum)? true : false
}