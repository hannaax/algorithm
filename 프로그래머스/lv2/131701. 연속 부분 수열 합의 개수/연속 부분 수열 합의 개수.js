// function solution(elements) {
//     var answer = 0;
//     let queue = [];
//     let sumElements = [];
//     let sumList = [];
//     let n = 1; // 길이가 n인 연속 부분 수열
    
//     // queue가 elements와 동일한 순서일때까지 반복

//         while(queue.length!==n) queue.push(el)
//         const el = queue.unshift()
//         queue.push(el)
//         while(sumElements.length!==n) sumElements.push(el)
//         queue.pop(el)
//         console.log(sumElements)
//         // let sum = sumElements.reduce((a,b)=a+b)
//         //     sumList.push(sum)
//         // while(sumElements.length!==0) sumElements.pop()
//     // console.log(sumList)
//     return answer;
// }

function solution(elements) {
  const set = new Set();
  const N = elements.length;

  // 1 ~ n 길이까지의 연속부분수열을 만들기 위해 전체 길이만큼 반복
  for (let len = 1; len <= N; len++) {
    let rear = 0;
    let sum = 0;

    for (let front = 0; front < N; front++) {
      // 각 반복이 시작되면 윈도우 범위만큼 sum을 만들어둠
      if (front === 0) {
        while (rear < len) {
          sum += elements[rear++];
        }
      }
      // 그 이외의 경우 윈도우 범위에서 하나씩 더하고 빼면서 연속 부분수열의 합을 만든다.
      else {
        // front 이전 값을 뺀다.
        sum -= elements[front - 1];
        // rear가 전체 배열의 끝에 다다르면, 다시 앞으로 돌아간다.(순환)
        if (rear === N) rear = 0;
        // rear 값을 더한다.
        sum += elements[rear++];
        
        // sum += elements[(j+i-1) % len]; => 나눈 나머지로 rear를 구하는 법도 있음.
      }
      set.add(sum);
    }
  }

  return set.size;
}