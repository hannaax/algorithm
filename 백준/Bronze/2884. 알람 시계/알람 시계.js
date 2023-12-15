const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    let hour = input[0];
    let minute = input[1] - 45;

    if (minute < 0) {
        minute += 60;
        hour--;

        if (hour < 0) {
            hour = 23;
        }
    }

    console.log(hour, minute);
    process.exit();
});