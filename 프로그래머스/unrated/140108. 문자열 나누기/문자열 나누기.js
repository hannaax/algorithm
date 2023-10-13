function solution(s) {
    var answer = 0;
    let map = new Map()
    let queue = ''
    let str = ''
    
    for(let x of s){
        if(queue === '') {
            queue += x
            map.set(x,1)
            str = x
        }
        else {
            if(x===str){
                queue += x
                map.set(x,map.get(x)+1)
            }
            else{
                queue += x
                map.get('etc')===undefined? map.set('etc',1) : map.set('etc',map.get('etc')+1)
            }
            if(map.get(str)===map.get('etc')){
                console.log(queue,map)
                answer++
                queue = ''
                map.delete(str)
                map.delete('etc')
            }
        }
    }
    if(queue !== '') answer++
    
    return answer;
}