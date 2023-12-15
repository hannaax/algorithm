const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(parseInt(line));
}).on('close', function(){
    let x = input[0];
    let y = input[1];
    
    if(x>0 && y>0) console.log(1)
    else if(x<0 && y>0) console.log(2)
    else if(x<0 && y<0) console.log(3)
    else console.log(4)
    
    process.exit();
});
