function solution(num_list, n) {
    var answer = [];
    new Array(num_list.length/n).fill(0).map((el)=>{
        let result = num_list.splice(el,n)
         answer.push(result)
    })

    
    return answer;
}