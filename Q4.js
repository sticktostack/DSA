// Q.4 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same

// case 1 ==> arr = [1,1,2]
// case 2 ==> [0,0,1,1,1,2,2,3,3,4]
function removeDuplicates(nums){
    let k = 1
for(let i=0; i<nums.length; i++){
   if(nums[i] !== nums[k-1]){
    nums[k] = nums[i]
    k++
   }
}
return k;
};