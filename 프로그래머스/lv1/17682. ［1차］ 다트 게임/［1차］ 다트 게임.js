function solution(dartResult) {
    var answer = 0;
    
    // S,D,T : **1,**2,**3
    // * : 해당점수*2 , 바로전점수*2
    // # : 해당점수*-1
    
    let queue = []
    
    for(let x of dartResult) {
        if(queue[queue.length-1]==='1' && x==='0') {
                queue.pop()
                queue.push('10')
        }
        else if(!isNaN(+x)) queue.push(x)
        
        if(x==='S') {
            let num = queue.pop()
            queue.push(num**1)
        }
        if(x==='D') {
            let num = queue.pop()
            queue.push(num**2)
        }
        if(x==='T') {
            let num = queue.pop()
            queue.push(num**3)
        }
        if(x==='*') {
            let last = queue.pop()
            if(queue.length!==0) {
                let prev = queue.pop()
                queue.push(prev*2)
            }
            queue.push(last*2)
        }
        if(x==='#') {
            let num = queue.pop()
            queue.push(-num)
        }
    }
    console.log(queue)
    
    answer = queue.reduce((a,b)=>a+b)

    return answer;
}