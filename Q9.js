// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

let nums = [3, 2, 2,2,3];
const map = new Map();
let n = nums.length;
let majority;
for (let i = 0; i < nums.length; i++) {
  if (map.has(nums[i])) {
    map.set(nums[i], map.get(nums[i]) + 1);
  } else {
    map.set(nums[i], 1);
  }
  if (map.get(nums[i]) > Math.floor(n / 2)) {
    majority = nums[i];
    break
  }
}
console.log(majority)