function solution(arr)
{
    var answer = [];
    for(let x of arr){
        if(answer[answer.length-1]===x) continue
        answer.push(x)
    }
    
    return answer;
}