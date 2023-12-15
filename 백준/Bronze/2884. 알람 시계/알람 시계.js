const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const hour = input[0]
    const minute = input[1]
    
    if(hour===0 && minute<45) console.log(23, 60-(45-minute))
    else if(minute<45) console.log(hour-1, 60-(45-minute))
    else console.log(hour, minute-45)
    
    process.exit();
});
