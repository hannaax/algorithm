function solution(array, commands) {
    var answer = [];
    let slice= []
    // [[00,01,02],[10,11,12],[20,21,22]]
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1])
    }
    return answer;
}