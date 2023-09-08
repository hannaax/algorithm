// function solution(a, b) {
//     var answer = '';
//     return answer;
// }

// // 7일 단위 월-금 반복
// // 윤년 : 2월이 29일
// // 31일 : 1,3,5,7,8,10,12
// // 30일 : 4,6,9,11

// // b+oneMonth =>  a ++

// //30+29+31+30+31 ...
function solution(a, b) {
    // 윤년은 2월이 29일까지 있고, 1년이 366일이다.
    // 4, 100, 400으로 나누어지는 년도는 윤년이다.
    const weekToDay = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    let day = b+4; // 1월 1일은 FRI, b가 1일 때 인덱스로는 5가 되어야한다.
    // 1월은 이전 월의 일수를 더하지 않음으로 a-1 조건으로 해야한다.
    for(let i = 0; i < a-1; ++i){
        day += leapYearMonths[i];
    }
    return weekToDay[day%7];
}