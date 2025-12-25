// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// let  nums = [1,2,3,1]


var containsDuplicate = function(nums) {
    const map = new Map()

for(let i=0; i<nums.length; i++){
    if(map.has(nums[i])){
        map.set(nums[i],map.get(nums[i])+1)
        return true
        // break
    }else{
        map.set(nums[i],1)
        return false
    }
}
};