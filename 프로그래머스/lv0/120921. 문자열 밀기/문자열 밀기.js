function solution(A, B) {
    // 한칸: o + hell
    // 두칸: lo + hel
    // 세칸: llo + he
    // console.log(A.slice(5,5) + A.slice(0,5))
    // console.log(A.slice(4,5) + A.slice(0,4))
    // console.log(A.slice(3,5) + A.slice(0,3))
    var answer = -1;
    let slice = ""
    let count = -1
    n = A.length
    for(let i=0; i<n; i++){
        slice = A.slice(n-i,n) + A.slice(0,n-i)
        count++
        if(slice===B) {
            answer = count
            return answer;
        }
    }
    return answer;
}