// function solution(citations) {
//     var answer = 0;
//     let prev = 0;
    
//     citations = citations.sort((a,b)=>b-a)
//     console.log(citations)
    
//     for(let x of citations){
//         if(prev !== x){
//             prev = x;
//             const moreThanX = citations.filter((el) => el>=x).length
//             console.log(moreThanX)
//             if(moreThanX>=x) {
//                 answer = x;
//                 break;
//             }
//         }
//     }
    
//     return answer;
// }
function solution(citations) {

    citations.sort((a, b) => b - a);

    let answers = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            answers++;
        }
    }

    return answers;
}