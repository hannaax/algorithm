function solution(brown, yellow) {
    var answer = [];
    // yellow로 사각형이 만들어질 수 있는 경우의 수는
    // yellow의 두 공약수의 곱
    // 예를 들어 yellow가  24이면
    // 1*24, 2*12, 3*8 ....
    // 두 수 중 큰 수가 width, 작은 수 height
    // 카펫 width,heigth: yellow의 w+2, yellow의 h+2
    // 카펫 width*height = brown+yellow
    
    let sum = brown + yellow;
    
    for(let height=3; height<=brown; height++){
        if(sum % height === 0){
            let width = sum / height;
            
            if((height-2)*(width-2) === yellow){
                return [width, height];
            }
        }
    }
    return answer
}