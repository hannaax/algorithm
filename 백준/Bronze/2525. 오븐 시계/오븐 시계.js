const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line);
}).on('close', function(){
    const currentTime = input[0].split(' ').map(Number);
    const hour = currentTime[0]; 
    const minute = currentTime[1]; 
    const cookingTime = parseInt(input[1]); 
    const sum = minute+cookingTime;
        
        if(sum<60) console.log(hour, sum);
        else {
            const quotient = parseInt(sum/60);
            const remain = sum%60;
            
            if(hour+quotient >= 24) console.log(hour+quotient-24, remain);
            
            else console.log(hour+quotient, remain);
        }

  process.exit();
});