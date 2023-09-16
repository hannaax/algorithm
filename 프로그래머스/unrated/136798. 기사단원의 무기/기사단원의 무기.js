// function solution(number, limit, power) {
//     var answer = 0;
// //     // 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기 구매
// //     // 구매할 무기의 공격력이 제한수치보다 크면, 정해진 공격력을 가진 무기 구매
    
// //     let numbers = Array.from({length:number},(_,i)=>i+1)
// //     let cnt = new Array(number).fill(0)
    
// //     // 주어진 수의 절반까지만 약수 구하기
    
// //     numbers.forEach((number,i)=>{
// //         for(let j=1; j<=number/2; j++){
// //             if(number%j===0) cnt[i]++
// //         }
// //     })
    
// //     cnt = cnt.map((el)=>(el>limit? power : el))
// //     console.log(cnt)
    
// //     answer = cnt.reduce((acc,cur)=>acc+cur)
    
//     let divisors= []
    
//     for(let i=1; i<=number; i++){ // 기사
//         divisors[i-1] = 0;
//         for(let j=1; j<=parseInt(i/2); j++) { // 약수
//             if(i===1) divisors[0] ++
//             else if(i%j===0) {
//                 divisors[i-1] ++
//             }
//         }
//         divisors[i-1] ++ // 본인
//     }
//     console.log(divisors)
    
//     divisors = divisors.map((el)=>(el>limit? power : el))
    
//     answer = divisors.reduce((acc,cur)=>acc+cur)
    
//     return answer;
// }
function solution(number, limit, power) {
  const nums = [];

  // 1부터 number 까지 순차적으로 약수의 개수를 확인한다.
  for (let cur = 1; cur <= number; cur++) {
    let divisor = 0;

    // 1부터 현재 수의 절반 까지만 반복문을 돌린다.
    // 약수는 본래 값을 제외하고 n/2보다 클 수 없기 때문이다.

    for (let i = 1; i <= cur / 2; i++) {

      // i로 나누어 나머지가 0이면 약수이므로
      // 약수면 1을 더해준다.
      if (cur % i === 0) {
        divisor += 1;
      }
    }

    // 위에서 본래 값을 제외하고 반절만 돌렸기 때문에
    // 본래 값을 넣어준다 생각 하고 1을 더 더해준다.
    nums.push(divisor + 1);
  }

  // 위 작업을 통해 나온 개수의 배열을 map과 reduce를 통해 정답을 구한다.
  // num === [1, 2, 2, 3, 2]
  return nums
    .map((n) => {

      // n이 limit보다 크게되면 협약기관에서 정한 공격력을 가지는 무기를
      // 그렇지 않으면 그대로 n을 구매한다.
      return n > limit ? power : n;
    })
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21