function solution(my_string) {
    var answer = 0;
    // for(let i=0; i<my_string.length; i++){
    //     if(!isNaN(my_string[i])){
    //         while(isNaN(my_string[i+1])) answer+=Number(my_string[i])
    //     }
    // }
    answer = my_string.split(/[a-zA-Z]/g).map((el)=>Number(el)).reduce((acc,cur)=>acc+cur,0)
    return answer;
}