function solution(s) {
    var answer = 0;
    let words = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    words.forEach((word,i)=>{
        s = s.replaceAll(word,i)
    })
    return Number(s);
}