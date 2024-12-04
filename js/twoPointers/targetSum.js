//Example 2: Given a sorted array of unique integers and a target integer,
// return true if there exists a pair of numbers that sum to target, false otherwise.
// (In Two Sum, the input is not sorted).
//  For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

function targetSum(nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let currentSum = nums[i] + nums[j]
    if (currentSum === target){
      return true;
    }
    if (currentSum > target){
      j--;
    }
    if (currentSum < target){
      i++;
    }
  }
  return  false;
}

console.log(targetSum([1, 2, 4, 6, 8, 9, 14, 15], 13))
