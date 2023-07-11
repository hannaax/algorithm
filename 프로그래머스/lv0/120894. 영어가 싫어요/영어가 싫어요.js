function solution(numbers) {
    let numbersArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i=0; i<numbersArr.length; i++){
        if(numbers.includes(numbersArr[i])){
            numbers=numbers.replaceAll(numbersArr[i],i)
        }
        
    }
    
    
    return Number(numbers);
}