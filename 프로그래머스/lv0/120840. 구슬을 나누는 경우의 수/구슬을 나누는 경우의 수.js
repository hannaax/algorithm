function solution(balls, share) {
    var answer = 0;
    let tmp = Array.from({length:share}, ()=>0)
    function DFS(L, s){
        if(L===share){
            answer++;
        }
        else{
            for(let i=s; i<=balls; i++){
                tmp[L]=i;
                DFS(L+1, i+1)
            }
        }
    }
    DFS(0,1)
    return answer;
}