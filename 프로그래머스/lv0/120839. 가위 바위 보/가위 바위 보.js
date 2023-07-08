function solution(rsp) {
    var answer = '';
    for(let x of rsp){
        Number(x)===5? answer+=2:(Number(x)===2? answer+=0:answer+=5)
    }
    return answer;
}