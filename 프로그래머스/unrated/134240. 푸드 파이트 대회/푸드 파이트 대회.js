function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++){
        answer += String(i).repeat(Math.floor(food[i]/2))
    }
    answer = answer + 0 + [...answer].reverse().join('') 
    return answer;
}

// (음식배치)물(음식배치reverse)니까
// (음식배치)물 먼저 한 후에, 음식배치reverse 더하기

// 두선수의 음식 종류, 양이 같음
// 칼로리가 낮은 음식 먼저 배치
// 조건x 음식은 대회에 사용x
