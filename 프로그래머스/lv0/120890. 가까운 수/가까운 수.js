function solution(array, n) {
    var answer = 0;
    let distance = 1000;
    array = array.sort((a,b)=>a-b)
    for(let x of array){
        if(Math.abs(n-x)<distance) {
            distance=Math.abs(n-x)
            answer=x
        }
        else if(Math.abs(n-x)===distance) continue;
    }
    return answer;
}