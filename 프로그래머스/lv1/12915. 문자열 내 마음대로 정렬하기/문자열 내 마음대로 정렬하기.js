function solution(strings, n) {
    strings.sort((next,prev)=>{
        if(next[n] > prev[n]) return 1;
        if(prev[n] > next[n]) return -1;

        if(next > prev) return 1;
        if(prev > next) return -1;

        return 0;
    });
    return strings;
}