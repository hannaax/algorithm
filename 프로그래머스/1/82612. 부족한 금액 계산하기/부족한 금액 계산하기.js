function solution(price, money, count) {
    const prices = Array.from({length:count}, (v,i)=>(i+1)*price)
    
    const total = prices.reduce((a,b)=>a+b)
    
    return total-money>0? total-money:0
}