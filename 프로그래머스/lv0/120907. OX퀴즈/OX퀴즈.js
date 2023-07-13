function solution(quiz) {
    var answer = [];
    quiz.forEach((el)=>{
        let str = el.split(" ")
        if(str[1]==="-" && +str[0] - +str[2] === +str[4]) answer.push("O")
        else if(str[1]==="+" && +str[0] + +str[2] === +str[4]) answer.push("O")
        else answer.push("X")
    })
    return answer;
}