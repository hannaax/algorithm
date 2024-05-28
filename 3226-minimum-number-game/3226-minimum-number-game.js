/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    console.log(nums)
    let arr = []
    for(let i=0; i<(nums.length/2); i++) {
        arr.push(nums.slice((2*i),(2*(i+1))).reverse())
    }
    return arr.flat()
};