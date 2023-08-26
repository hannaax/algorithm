function solution(s) {
    s = s.split(' ').map(Number);
    console.log(s.sort((a,b)=>a-b))
    return `${s[0]} ${s[s.length-1]}`;
}