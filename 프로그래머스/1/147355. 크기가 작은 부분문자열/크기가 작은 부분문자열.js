function solution(t, p) {
    let answer = 0;
    let lt=0;
    let rt=p.length
    
    while(rt!=t.length+1){
    const part = t.slice(lt,rt)
    if(+part <= +p) {
       answer++;
    } 
    lt++
    rt++
    }
    // const part = t.slice(lt,rt)
    // +part < +p? answer++ 
    // lt++
    // rt++
    
    return answer;
}