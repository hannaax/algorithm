function solution(s) {
    var answer = '';
    s.split(" ").forEach((word)=>{
        console.log(word)
        for(let i=0; i<word.length; i++){
            console.log(i)
            if(i%2===0) {
                answer += word[i].toUpperCase()
            }
            else answer += word[i].toLowerCase()
        }
        answer += " "
    })
    return answer.slice(0,-1);
}