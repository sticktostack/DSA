// Given a non-empty array of integers nums,


// every element appears twice except for one. Find that single one.
let nums = [4,2,1,2,1]
// let nums = [4,2,1,2,1]
let single

for(let i=0; i<nums.length; i++){
    let count =0
    for(let j = 0; j<nums.length; j++){
        if(nums[i] === nums[j]){
            count++
        }
    }
 if(count ===1){
    single=nums[i]
    break
 }
}
console.log(single)


// const map = new Map()

// for(let i=0; i<nums.length; i++){
//     if(map.has(nums[i])){
//         map.set(nums[i],map.get(nums[i])+1)
//     }else{
//         map.set(nums[i],1)
//     }
// }
// for(let [number,value] of map){
//     if(value === 1){
//         single = number
//     break
//     }
// }
