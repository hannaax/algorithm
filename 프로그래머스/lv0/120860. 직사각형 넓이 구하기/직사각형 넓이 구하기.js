function solution(dots) {
    var answer = 0;
    let dot = dots[0]
    let width, height = 0
    // y가 같으면 가로, x가 같으면 세로
    for(let i=0; i<dots.length; i++){
        for(let j=0; j<2; j++){
            if(dots[i][0]===dot[0]) width = Math.abs(dots[i][1]-dot[1])
            if(dots[i][1]===dot[1]) height = Math.abs(dots[i][0]-dot[0])
        }
    }
    answer = width*height
    return answer;
}