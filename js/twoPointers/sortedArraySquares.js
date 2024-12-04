//Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
//Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function sortedArraySquares(nums) {
  let sorted = new Array(nums.length)
  let i = 0;
  let j = nums.length - 1;
  let pos = nums.length - 1; // pointer in the new array that I will use to insert the squares

  while (i <= j) {
    //a bit of fun here -> if the array is sorted, you only have to think about the fact after
    // squaring negative numbers they become positive, find the bigger one, place it last and decrement pos by 1;
    if (nums[i] ** 2 > nums[j] ** 2){ // here you can also compare absolute values instead of the squares
      sorted[pos] = nums[i] ** 2
      i++;
    } else {
      sorted[pos] = nums[j] ** 2;
      j--;
    }
    pos --;
  }
  return sorted;
}

console.log(sortedArraySquares([-7,-3,2,3,11]))
