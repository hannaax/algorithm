function solution(s)
{
    var answer = 1;
    let stack = []

   for(let i=0; i<s.length; i++){
       if(stack[stack.length-1]===s[i]) stack.pop()
       else stack.push(s[i])
   }
    if(stack.length) return 0

    return answer;
}