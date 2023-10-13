function solution(s) {
    var answer = [];
    let map = new Map();
    
    // s를 각 요소 배열의 원소 개수 순으로 정렬하기
    
    // s.sort((a,b)=>a.length-b.length);
    // console.log(s)
    
    s = s.replaceAll('{','')
    s = s.replaceAll('}','')
    s = s.split(',')
//     s = JSON.parse(s);
    
    // s.sort((a,b)=>a.length-b.length);
    
    console.log(s)
    
    // s = s.split(',')
    // s = s.replace(/{|}/g,'')
    // console.log(s)
    
    // s = s.replace(/{|}/g,'')
    
    for(let x of s){
        map.set(x,(map.get(x) || 0)+1)
    }
    
    let arr = [...map.entries()] // Array.from(map.entries())
    
    arr.sort((a,b)=>b[1]-a[1])
    
    return arr.map((el)=> Number(el[0]));
}