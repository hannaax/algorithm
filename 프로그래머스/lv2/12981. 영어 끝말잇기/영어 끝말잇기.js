// function solution(n, words) {
//     var answer = [];
    
//     for (let i = 1; i < words.length; i++) {
//         let word = words[i]
        
// //         // 이전단어의 끝자리와 word의 첫자리 비교
// //         word.split('')[word.length-1] !== word[0] // 끝말 x
        
// //         // 이미 존재하는 단어인지 확인
// //         words.indexOf(words[i]) !== i // 존재하는 단어
        
// //         // result
// //         i%n === 0? [n,i/n] : [i%n,i/n+1]
        
//         // console.log(word)
//         // console.log(words[i-1].split('')[word.length-1])
//         console.log(words.indexOf(words[i]))
        
        
//     }
        
// }


function solution(n, words) {
  let answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = i % n + 1;
    let turn = Math.ceil((i + 1)/n);

    if (i > 0) {
      // 이전 단어 마지막 글자
      let last = words[i - 1].split("").pop();

      // 중복이거나 틀린 경우
      if (i > words.indexOf(word) || words[i][0] !== last) {
        answer = [p, turn];
        break;
      }
    }
  }

  return answer;
}