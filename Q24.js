//   Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

function findMissingElem(nums){
    let n = nums.length
    let map = new Map()
    for(let i=0; i<n; i++){
        map.set(nums[i],true)
    }
    let res = []
        for(let i=1; i<=n; i++){
            if(!map.has(nums[i])){
                res.push(i)
            }
        }
        return res
}