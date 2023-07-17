function solution(cards1, cards2, goal) {
    let answer = 'No';
    // 순서대로 사용
    // 카드 사용 안하고 다음 카드로 못 넘어감
    let p1=0
    let p2=0
    let cnt=0;
    for(let i=0; i<goal.length; i++){
        if(cards1[p1]===goal[i]) { 
            p1++
            cnt++
        }
        else if(cards2[p2]===goal[i]) {
            p2++
            cnt++
        }
    }
    if(cnt===goal.length) answer='Yes'
    console.log(p1)
    console.log(p2)
    console.log(cnt)
    console.log(goal.length)
    // if(cards1[p1]===goal[0]) { 
    //         p1++
    //         goal.shift()
    //     }
    // while(p1<cards1.length && goal.length !== 0){
    //     if(cards1[p1]===goal[0]) { 
    //         p1++
    //         goal.shift()
    //     }
    //     else if(cards1[p2]===goal[0]) {
    //         p2++
    //         goal.shift()
    //     }
    // }
    return answer;
}