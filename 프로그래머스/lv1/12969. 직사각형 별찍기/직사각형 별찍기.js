process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    answer=""
    line= ""
    
    line = "*".repeat(a)
    
       for(let i=0; i<b; i++){
        answer += `${line}\n`
    }
    console.log(answer);
});