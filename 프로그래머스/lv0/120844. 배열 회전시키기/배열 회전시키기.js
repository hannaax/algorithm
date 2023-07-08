function solution(numbers, direction) {
    var answer = [];
    let queue = []
    for(let x of numbers){
        if(direction === 'right') {
            queue.push(x)
            if(queue.length===numbers.length){
                let last = queue.pop()
                queue.unshift(last)
            }       
        }
        else {
            queue.push(x)
            if(queue.length===numbers.length){
                let first = queue.shift()
                queue.push(first)
            }
        }
    }
    return queue;
}