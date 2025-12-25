//Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6]
// testcase ==> target = 5
// testcase ==> target = 2
// testcase ==> target = 7
function searchInsert(nums, target) {
   let index = nums.length
        for (let i = 0; i < nums.length; i++) {
         if (nums[i] >= target){
             index = i
             return index
  }
}
return index 
}