function solution(cacheSize, cities) {
    var answer = 0;
    let cache = Array.from({length: cacheSize}, ()=>null)
    
    console.log(cache)
    
    if(cacheSize === 0) return cities.length*5
    
    cities.forEach((city) => {
        city = city.toUpperCase()
            if(cache.includes(city)){
                if(cache[0]===city) answer++;
                else{
                    let idx = cache.indexOf(city);
                    for(let i=idx; i>=0; i--){
                        cache[i] = cache[i-1]
                    }
                    cache[0] = city;
                    answer+=1;
                }
            }
            else{
                for(let j=cache.length-1; j>=0; j--){
                    cache[j] = cache[j-1]
                }
                cache[0] = city;
                answer+=5;
            }
    })
    
    return answer;
}


// 소요 시간: 문제이해-15분, 문제풀이-45분