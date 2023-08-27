function solution(s) {
    var answer = '';
    let arr = s.split(' ').map((el)=>
        el?el[0].toUpperCase()+el.slice(1).toLowerCase() : '' )
    answer = arr.join(' ');
    return answer;
}