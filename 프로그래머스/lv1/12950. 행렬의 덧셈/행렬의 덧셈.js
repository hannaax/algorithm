function solution(arr1, arr2) {
    var answer = [];
    // [[00,01],[10,11]]
    // [00,10]
    
    for(let i=0; i<arr1.length; i++){
        answer.push([])
    }
    
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr1[0].length; j++){
            // console.log(arr1[i][j]+arr2[i][j])
            answer[i].push(arr1[i][j]+arr2[i][j])
        }
    }
    
    return answer;
}