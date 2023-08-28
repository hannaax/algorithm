function solution(s){
    var answer = true;
    let stack = []

    for(let i=0; i<s.length; i++){
        if(s[i]===")" && stack[stack.length-1]==="(") {
            stack.pop()
        }
        else {
            stack.push(s[i])
        }
    }
    if(stack.length) answer = false

    console.log(stack)
    return answer;
}