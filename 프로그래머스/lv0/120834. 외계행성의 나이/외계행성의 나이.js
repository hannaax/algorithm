function solution(age) {
    var answer = '';
    const alphabets = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9}
    const keysOfAlphabets = Object.keys(alphabets);
    for(let x of String(age)){
        let result = keysOfAlphabets.find((key) => alphabets[key] === Number(x));
        answer+=result
    }
    return answer;
}