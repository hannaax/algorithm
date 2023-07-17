function solution(keyinput, board) {
    let x = 0
    let y = 0
    const width = board[0]/2
    const height = board[1]/2
    // up: [0,1] / down: [0,-1] / left: [-1,0] / right: [1,0]
    
    for(let key of keyinput){
        if(x<width && x>-width && y<height && y>-height){
        if(key==='up' && y+1 < height) y++
        if(key==='down' && y-1 > -height) y--
        if(key==='left' && x-1 > -width) x--
        if(key==='right' && x+1 < width) x++
        }
        console.log(x,y)
        
    }

    
    return [x,y];
}