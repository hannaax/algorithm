function solution(skill, skill_trees) {
    var answer = 0;
    
    skill_trees.forEach((skilltree)=>{
        let possible = true;
        let queue = [...skill]
        for(let x of skilltree){
            if(skill.includes(x) && x === queue[0]) queue.shift()
            else if(skill.includes(x) && x !== queue[0]) {
                console.log(skilltree, x, queue[0])
                possible = false;
                break;
            }
        }
        if(possible) {
            answer++
        }
    })
    
    return answer;
}