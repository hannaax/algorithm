// function solution(arr) {
//     var answer = 0;
//     let divisor = 0;
//     // let num = arr[1];
//     // let remain = arr[0];
    
//     arr = arr.sort((a,b) => a-b)
    
//     for(let i=1; i<arr.length; i++){
//         let num = arr[i]
//         let remain = arr[i-1]
        
//         if(num%remain === 0) divisor = arr[i-1]
        
//         else{
//             while(num%remain !== 0) {
//             remain = num%remain   
//         }
//         divisor = remain
//         }
//         // console.log(remain)
//         console.log(divisor)
// //         if(arr[i]%arr[i-1] !== 0) {
            
// //             // 나머지가 
// //         } 
// //         else {}
//     }
//     return answer;
// }
function solution(arr) {
    return arr.reduce((a, b) =>{
        return a * b / getGCD(a, b);
    })
}

//최대 공약수를 구하는 함수
function getGCD(a, b){
    if(a % b == 0) return b;
    return getGCD(b, a % b);
}