function solution(num, total) {
    var answer = []
    let head = 0
    let mid = 0
    let distance = 0
    num%2===1? distance = Math.floor(num/2) : distance = Math.floor(num/2)-1
    
    mid = Math.floor(total/num)
    head = mid-distance
    console.log(head)
    
    answer = Array.from({length:num}, (_,i)=>i+head)
    
    return answer;
}