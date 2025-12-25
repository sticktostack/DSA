// nums = [1, 2, 3, 1]
// k = 3

// var containsNearbyDuplicate = function (nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
//  arr = [1,2,3,1]
//  const res = arr.map((value,index)=>{
//     console.log({[value]:index})
//  })

arr = [1,3,1,5,6]
const map = new Map()
for(let i=0; i<arr.length; i++){
    if(map.has(arr[i])){
        console.log("duplicates")
    }else{
        map.set(arr[i],i)
        // console.log("no duplicates")
    }
}
// arr.map((index,value)=>{
//     console.log({[index]:value})
// })