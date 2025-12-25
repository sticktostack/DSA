// Q1.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//inputs given in question :
// case1 ==> nums = [2,7,11,15], target = 9
// case2 ==> [3,2,4]
// case3 ==> [3,3]

function sumofTwo(nums,target){
    for(let i=0 ; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            // everytime j starts from 1 element ahead from i otherwise the same element will be used twice 
            if(nums[i]+nums[j]===target)
                return [i,j]
        }
    }
}
sumofTwo([3,2,4],9)