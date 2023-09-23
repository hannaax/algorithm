function solution(s) {
    var answer = 0;
    let queue = [...s]
    let stack = []
    
//     for(let i=0; i<queue.length; i++){
//         if(queue[0]===')' || queue[0]==='}' || queue[0]===']') continue;
//         else if(queue[queue.length-1]==='(' || queue[queue.length-1]==='{' || queue[queue.length-1]==='[') continue;
//         else {
//             for(let j=0; j<queue.length; j++){
//                 if(queue[j]==='(' || queue[j]==='{' || queue[j]==='[') stack.push(queue[j])

//                 if(queue[j]===')' && stack[stack.length-1]==='(') stack.pop()
//                 if(queue[j]==='}' && stack[stack.length-1]==='{') stack.pop()
//                 if(queue[j]===']' && stack[stack.length-1]==='[') stack.pop()
//                 }
//                 if(stack.length !== 0) stack=[];
//                 else answer++;
//             }
//     }
    
    for(let i=0; i<queue.length; i++){
        const firstEl = queue.shift()
        queue.push(firstEl)
        // console.log('strings',queue)
        if(queue[0]===')' || queue[0]==='}' || queue[0]===']') continue;
        else if(queue[queue.length-1]==='(' || queue[queue.length-1]==='{' || queue[queue.length-1]==='[') continue;
        else {
            for(let j=0; j<queue.length; j++){
                // console.log(stack)
                if(queue[j]==='(' || queue[j]==='{' || queue[j]==='[') stack.push(queue[j])

                if(queue[j]===')' && stack[stack.length-1]==='(') stack.pop()
                if(queue[j]==='}' && stack[stack.length-1]==='{') stack.pop()
                if(queue[j]===']' && stack[stack.length-1]==='[') stack.pop()
            }
            
            if(stack.length !== 0) stack=[];
            else answer++;
        }
        }
    
    return answer;
}