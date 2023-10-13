function solution(numbers, hand) {
    var answer = '';
    
    let keypad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
    let left = [3,0]
    let right = [3,2]
    let centerKey = [0,0]
    let centerHand = '';
    
    for(let num of numbers){
        for(let i=0; i<keypad.length; i++){
            for(let j=0; j<keypad[0].length; j++){
                if(num === 1 || num === 4 || num === 7) {
                    if(num === 1 && keypad[i][j]===1) left = [i,j]
                    if(num === 4 && keypad[i][j]===4) left = [i,j]
                    if(num === 7 && keypad[i][j]===7) left = [i,j]
                }
                else if(num === 3 || num === 6 || num === 9) {
                    if(num === 3 && keypad[i][j]===3) right = [i,j]
                    if(num === 6 && keypad[i][j]===6) right = [i,j]
                    if(num === 9 && keypad[i][j]===9) right = [i,j]
                }
                else {
                    let leftDis=0;
                    let rightDis=0;
                    if(num === 2 && keypad[i][j]===2) {
                        centerKey = [i,j]
                        leftDis = Math.abs(centerKey[0]-left[0])+Math.abs(centerKey[1]-left[1])
                        rightDis = Math.abs(centerKey[0]-right[0])+Math.abs(centerKey[1]-right[1])
                        if(leftDis>rightDis) {
                            centerHand = "R"
                            right = centerKey
                        }
                        else if(leftDis<rightDis) {
                            centerHand = "L"
                            left = centerKey
                        }
                        else {
                            centerHand = hand[0].toUpperCase()
                            hand[0]==='r'? right = centerKey : left = centerKey
                        }
                    }
                    if(num === 5 && keypad[i][j]===5) {
                        centerKey = [i,j]
                        leftDis = Math.abs(centerKey[0]-left[0])+Math.abs(centerKey[1]-left[1])
                        rightDis = Math.abs(centerKey[0]-right[0])+Math.abs(centerKey[1]-right[1])
                        if(leftDis>rightDis) {
                            centerHand = "R"
                            right = centerKey
                        }
                        else if(leftDis<rightDis) {
                            centerHand = "L"
                            left = centerKey
                        }
                        else {
                            centerHand = hand[0].toUpperCase()
                            hand[0]==='r'? right = centerKey : left = centerKey
                        }
                    }
                    if(num === 8 && keypad[i][j]===8) {
                        centerKey = [i,j]
                        leftDis = Math.abs(centerKey[0]-left[0])+Math.abs(centerKey[1]-left[1])
                        rightDis = Math.abs(centerKey[0]-right[0])+Math.abs(centerKey[1]-right[1])
                        if(leftDis>rightDis) {
                            centerHand = "R"
                            right = centerKey
                        }
                        else if(leftDis<rightDis) {
                            centerHand = "L"
                            left = centerKey
                        }
                        else {
                            centerHand = hand[0].toUpperCase()
                            hand[0]==='r'? right = centerKey : left = centerKey
                        }
                    }
                    if(num === 0 && keypad[i][j]===0) {
                        centerKey = [i,j]
                        leftDis = Math.abs(centerKey[0]-left[0])+Math.abs(centerKey[1]-left[1])
                        rightDis = Math.abs(centerKey[0]-right[0])+Math.abs(centerKey[1]-right[1])
                        if(leftDis>rightDis) {
                            centerHand = "R"
                            right = centerKey
                        }
                        else if(leftDis<rightDis) {
                            centerHand = "L"
                            left = centerKey
                        }
                        else {
                            centerHand = hand[0].toUpperCase()
                            hand[0]==='r'? right = centerKey : left = centerKey
                        }
                    }
                        // 2의 i,j를 centerKey에 할당
                        // let leftDistance = (centerKey[0]-left[0])+(centerKey[1]-left[1]) 구하기
                        // let rightD도 구함
                        // leftD > rightD이면 answer += "R"
                        // leftD === rightD이면 answer += hand
                }
            }
        }
        // console.log(left, right, centerKey)
        if(num === 1 || num === 4 || num === 7) answer += "L"
        else if(num === 3 || num === 6 || num === 9) answer += "R"
        else answer += centerHand
    }
    return answer;
}