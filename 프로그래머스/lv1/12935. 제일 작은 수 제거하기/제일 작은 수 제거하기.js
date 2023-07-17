function solution(arr) {
    if(arr.length===1)  return [-1]
    else {
        let min = [...arr].sort((a,b)=>a-b).shift()
        arr = arr.filter((el)=>el!==min)
        return arr
    }
}