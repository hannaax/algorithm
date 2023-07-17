function solution(t, p) {
    let answer = 0;
    let part = ""
    let n = p.length

    for(let i=0; i<n; i++){
        part += t[i]
    }
    if(Number(part)<=Number(p)) answer++

    for(let i=n; i<t.length; i++){
        part = part.replace(t[i-n],"")
        part = part+t[i]
        if(Number(part)<=Number(p)) {
            console.log(part)
            answer++
        }
    }
    return answer;
}