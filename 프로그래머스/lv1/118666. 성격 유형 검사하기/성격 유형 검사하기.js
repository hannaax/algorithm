function solution(survey, choices) {
    var answer = '';
    let scores = ['',3,2,1,0,1,2,3]
    let map = new Map()
    
    for(let i=0; i<survey.length; i++){
        if(choices[i]===4) continue;
        else if(choices[i]<4){
            map.set(survey[i][0], (map.get(survey[i][0]) || 0) + scores[choices[i]])
        }
        else{
            map.set(survey[i][1], (map.get(survey[i][1]) || 0) + scores[choices[i]])
        }
    }
    // console.log(map)
    
    const types = ['R','T','C','F','J','M','A','N']
    
    for(let type of types){
        if(map.get(type)===undefined) map.set(type,0)
    }
    // console.log(map)
    
    map.get('R')>=map.get('T')? answer+='R':answer+='T'
    map.get('C')>=map.get('F')? answer+='C':answer+='F' 
    map.get('J')>=map.get('M')? answer+='J':answer+='M' 
    map.get('A')>=map.get('N')? answer+='A':answer+='N' 
    
    return answer;
}