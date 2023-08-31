function solution(s, n) {
    var answer = '';
    let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    s.split("").forEach((el) => {
        el_up = el.toUpperCase()
        if(alphabets.indexOf(el_up) !== -1) {
            let i = alphabets.indexOf(el_up)
            
            if(i+n > alphabets.length-1) {
                let aa = 0
                j = i+n-(alphabets.length)
                // console.log(j)
                // el = alphabets[j]
                // if(el=== el.toUpperCase()) el = alphabets[j]
                // else el = alphabets[j].toLowerCase()
                if(el === el_up) el = alphabets[j]
                else el = alphabets[j].toLowerCase()
            }
            else{
                if(el === el_up) el = alphabets[i+n]
                else el = alphabets[i+n].toLowerCase()
            }
        } 
        // console.log(alphabets[i])
        answer += el
    })
    return answer;
}