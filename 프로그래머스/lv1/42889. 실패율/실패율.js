function solution(N, stages) {
    var answer = [];
    let failureRates = []
    
    for(let i=1; i<=N; i++){
        const mole = stages.filter(el=> el===i).length
        const deno = stages.filter(el=> el>=i).length
        failureRates.push([i,(mole/deno)])
    }
    
    // console.log(failureRates)
    
    failureRates2 = failureRates.sort((a,b)=>{
        if(a[1]===b[1]) return a[0] - b[0]
        else return parseFloat(b[1]) - parseFloat(a[1])
    })
    
    // console.log(failureRates2)
    answer=failureRates2.map((el)=>el[0])
    
    
    return answer;
}

    // S : 스테이지
    // 도달X = 분자 : stages의 요소 중 S보다 같거나 작은 원소의 개수 
    // 도달O = 분모 : stages의 요소 중 S보다 같거나 큰 원소의 개수 (filter 사용)
    // 각 S의 분자/분모(실패율)를 비교해서 실패율이 작은 S가 answer 배열의 앞에 오게 하기