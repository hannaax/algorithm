function solution(my_string, num1, num2) {
    var answer = '';
    // const str_num1= my_string[num1]
    // console.log(str_num1)
    // str1 = my_string.slice().replace(my_string[num1],my_string[num2])
    // console.log(my_string[num2])
    // str2 =str1.replace(str1[2],str_num1)
    my_string = my_string.split('');
	[ my_string[num1], my_string[num2] ] = [ my_string[num2], my_string[num1] ];
	return my_string.join('');
}