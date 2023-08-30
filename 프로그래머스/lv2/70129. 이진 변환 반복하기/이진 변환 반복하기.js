function binaryNum(n){
    let answer = ""
    function DFS(L){
        if(L===0) return
        else{
            DFS(parseInt(L/2))
            answer += String(L%2)
        }
    }
    DFS(n)
    return answer
}

function solution(s) {
    var answer = [0,0];
    
    while(s!=="1"){
        answer[1] += s.split('0').length-1
        s = s.replace(/0/g,'')
        s = binaryNum(s.length)
        answer[0]++
    }
    return answer;
}