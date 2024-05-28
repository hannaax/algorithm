function solution(arr)
{
    let answer = []
    let stack = []
    for(let i=0; i<arr.length; i++){
        if(stack[stack.length-1] === arr[i]) continue
        else {
            stack.push(arr[i])
            answer.push(stack[stack.length-1])
        }
    }
    return answer;
}