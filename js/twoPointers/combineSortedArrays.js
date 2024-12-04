//Example 3: Given two sorted integer arrays arr1 and arr2,
// return a new array that combines both of them and is also sorted.
//[1,2,4]
//[3,5,6]

function combineSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let combined = [];

  while (i < arr1.length && j < arr2.length) {
    //compare them,push the smaller value into the new array and increment the pointer
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i])
      i++
    } else {
      combined.push(arr2[j]);
      j++
    }
  }
  // just checking if any of the arrays is longer than the other in the two while loops below
  while (i < arr1.length) {
    //since the array is already sorted, push the excess items in the new array iteratively
    combined.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }
  return combined;
}

console.log(combineSortedArrays([1, 4, 7, 20], [3, 5, 6]))
