function solution(clothes) {
    var answer = 0;
    let multiple = 1;
    let map = new Map();
    for(let i=0; i<clothes.length; i++){
        map.set(clothes[i][1],(map.get(clothes[i][1]) || 0)+1)
        }
console.log(map)
    for(let v of map.values()){
        multiple *= v+1
    }
    console.log(multiple)
    
    return multiple-1;
}