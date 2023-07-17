function solution(name, yearning, photo) {
    var answer = [];
    let score = 0;
    for(let i=0; i<photo.length; i++){
        score = 0;
        for(let j=0; j<photo[i].length; j++){
            for(let k=0; k<name.length; k++){
                if(photo[i][j]===name[k]) score += yearning[k]
            }
        }
        answer.push(score)
    }
    return answer;
}