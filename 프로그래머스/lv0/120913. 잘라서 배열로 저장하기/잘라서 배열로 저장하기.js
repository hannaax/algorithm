function solution(my_str, n) {
    var answer = [];
    let arr=[...my_str]
    new Array(Math.ceil(my_str.length/n)).fill(0).map((el)=>{
        let result = arr.splice(el,n)
        answer.push(result.join(''))
    })

    return answer;
}