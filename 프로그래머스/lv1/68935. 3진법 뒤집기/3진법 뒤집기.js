function changeNum(n){
    let answer=''
function DFS(L){
    if(L===0) return
    else{
        DFS(parseInt(L/3))
        answer += String(L%3)
    }
}
    DFS(n)
    return answer
}

function solution(n) {
    var answer = 0;
    [...changeNum(n)].map((num,i)=> answer += num*Math.pow(3,i))
    return answer;
}