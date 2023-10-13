// function solution(k, m, score) {
//     var answer = 0;
//     let min = 0;
//     let boxs = []
//     // k: 최상품, 1: 최하품
//     // 한상자에 m개
//     // 낮은 점수가 p일때 한 상자의 가격은 p*m
//     // (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
    
//     let boxsNumber = Math.floor(score.length/m)
    
//     for(let i=1; i<=boxsNumber; i++){
//         answer += score.sort((a,b)=>b-a)[m*i-1]*m
//         console.log(answer)
//     }
    
    
//     return answer;
// }


function solution(k, m, score) {
  // 먼저 최대 이익을 위해 score를 내림차순으로 정렬합니다.
  // ex) [3, 3, 2, 2, 1, 1, 1]
  score.sort((a, b) => b - a);

  let answer = 0;

  // 최저 사과 점수 m - 1번 째 인덱스를 셋팅합니다.
  // 내림차순으로 정렬했기에 가능
  let idx = m - 1;

  // score 길이와 상자안에 들어갈 사과의 수를 나누어
  // 최대 상자 갯수를 구하고 그만큼만 반복문을 돌려줍니다.
  // ex) 7 / 4 = 1 사과가 7개고 한 박스에 4개씩이기에
  // 단 하나의 사과 박스만 구할 수 있습니다.
  for (let i = 0; i < Math.floor(score.length / m); i++) {

    // 아까 구한 idx번째(최저 점수)와 상자에 담긴 개수를 곱하고
    // 정답에 더해줍니다.
    // ex) [3, 3, 2, (2), 1, 1, 1]
    answer += score[idx] * m;

    // 그 다음 그 다음 상자의 최저 점수 사과를 고르기위해
    // m을 더해줍니다.
    idx += m;
  }

  return answer;
}