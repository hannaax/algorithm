            function binaryNum(n){
                let answer="";
                function DFS(n){
                     if(n===0) return;
                     else{
                         DFS(parseInt(n/2));
                         answer+=String(n%2);
                     }
                }
                DFS(n);
                return answer;
            }

function solution(n) {
    var answer = 0;
    let filterLengthofN=[...binaryNum(n)].filter((el)=>el==='1').length
    for(let i=n+1; i<=1000000; i++){
        let filterLengthofI=[...binaryNum(i)].filter((el)=>el==='1').length
        if(filterLengthofN===filterLengthofI) return i;
    }
    // if(filterLengthofN===filterLengthofI) return i;
    // return answer;
}