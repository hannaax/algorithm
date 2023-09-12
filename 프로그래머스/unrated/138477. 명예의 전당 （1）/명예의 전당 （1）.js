function solution(k, score) {
    var answer = [];
    let hall = [];
    
    for(let x of score) {
        if(hall.length === k && hall[0]<x) {
            hall.shift()
            hall.push(x)
        }
        // else if(hall.length === k && hall[0]>=x): 아무것도 안함
        // hall.length < k인 경우:
        else if(hall.length < k) hall.push(x)
        hall = hall.sort((a,b)=>a-b)
        answer.push(hall[0])
    }
    return answer;
}