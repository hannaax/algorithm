function solution(spell, dic) {
    var answer = 2;
    let cnt = 0;
    
    for(let i=0; i<dic.length; i++){
        cnt=0
        spell.forEach((letter)=>{
            if(dic[i].includes(letter)){
                cnt++
                if(cnt===spell.length) answer=1
            }
        })
    }
    
        
    return answer;
}