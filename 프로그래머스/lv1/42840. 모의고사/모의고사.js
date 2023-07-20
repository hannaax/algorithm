function solution(answers) {
    var answer = [];
    
    let man1 = "12345".repeat(Math.ceil(answers.length/5))
    let man2 = "21232425".repeat(Math.ceil(answers.length/8))
    let man3 = "3311224455".repeat(Math.ceil(answers.length/10))
    
    let scores= [0,0,0]
    
    for(let i=0; i<answers.length; i++){
    if(answers[i] === Number(man1[i])) scores[0]++
    if(answers[i] === Number(man2[i])) scores[1]++
    if(answers[i] === Number(man3[i])) scores[2]++
}

    console.log(scores)
    
    let max = Math.max(scores[0],scores[1],scores[2]);
    
    scores.forEach((score,i) => {
      if(score>=max) answer.push(i+1)  
    })

    return answer;
}



// let mans = [[str1.repeat()],[str2.repeat()],[str3.repeat()]]

// answers.length > arr.length ? arr.repeat(answers.length/arr.length)
