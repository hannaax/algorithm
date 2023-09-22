// function solution(s) {
//     var answer = 0;
//     let queue = [...s]
//     let stack = []
    
//     queue.forEach((x,i) => {
//          if(x==='(' || x==='{' || x==='[') stack.push(x)
//         // console.log(stack)
//         if(x===')' && stack[stack.length-1]==='(') stack.pop()
//         if(x==='}' && stack[stack.length-1]==='{') stack.pop()
//         if(x===']' && stack[stack.length-1]==='[') stack.pop()
//     })
//     if(stack.length !== 0) stack=[];
//     else answer++;   
    
//     queue.forEach((x,i) => {
//         const firstEl = queue.shift()
//         queue.push(firstEl)
//         // console.log('strings',queue)
//         if(queue[0]===')' || queue[0]==='}' || queue[0]===']') return;
//         else if(queue[queue.length-1]==='(' || queue[queue.length-1]==='{' || queue[queue.length-1]==='[') return;
        
//         if(x==='(' || x==='{' || x==='[') stack.push(x)
//         // console.log(stack)
//         if(x===')' && stack[stack.length-1]==='(') stack.pop()
//         if(x==='}' && stack[stack.length-1]==='{') stack.pop()
//         if(x===']' && stack[stack.length-1]==='[') stack.pop()
        
//         // console.log(stack)
//         if(stack.length !== 0) stack=[];
//         else answer++;
//     })
    
//     return answer;
// }


const pair = { '}': '{', ']': '[', ')': '(' }

function solution(s) {
  const arr = s.split('')
  let result = 0
  const isValid = arr => {
    const stack = []
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i]
      if (pair[c] === undefined) stack.push(c)
      else {
        if (stack[stack.length - 1] !== pair[c]) return false
        stack.pop()
      }
    }
    if (stack.length) return false
    return true
  }

  for (let i = 0; i < s.length; i++) {
    if (isValid(arr)) result++
    arr.push(arr.shift())
  }

  return result
}