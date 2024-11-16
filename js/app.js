/**
 * search for a target number in an  array
 * @param arr
 * @param target
 * @returns {number}
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target){
      return i // returning the index
    }
  }
  return  -1 // if nothing is found
}

let arrayItems = [10,20,30,40,59]
let targetItem = 20;
console.log(linearSearch(arrayItems, targetItem))



/**
 * check if sum matches target in a given array
 * use the concept of two pointers
 */
function sumMatchesTarget (arr, target) {
  let i = 0;
  let j = arr.length - 1

  while(i < j){
    let currSum = arr[i] + arr[j];
    if (currSum === target){
      return true;
    }

    if (currSum < target){
      i++
    }

    if (currSum > target){
      j--
    }
  }
  return false
}

console.log(sumMatchesTarget([1, 2, 4, 6, 8, 9, 14, 15], 13))

/**
 * check if a string given is a palindrome or not
 */
function palindrome (str){
  let i = 0
  let j = str.length - 1
  while (i < j ){
    if (str[i] !== str[j] ){
     return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome('racecar'));

/**
 *
 * @param companyData
 * @returns {number}
 */
function recurseSalaries (companyData){
  //base case
  if (Array.isArray(companyData)){
    let sum = 0;
    for (let employee of companyData){
      sum += employee.salary;
    }
    return sum;
  }
  //recursive step
  let sum = 0;
  for (let subDept of Object.values(companyData)){
    sum += recurseSalaries(subDept);
  }
  return  sum;
}

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

console.log(recurseSalaries(company));

/**
 * factorial n! = n * (n-1)!
 * f(5) = 5 *4*3...
 * 0! =1
 */
function factorial (n){
  if (n <= 0){
    return 1;
  }
  return  n * factorial(n-1)
}

console.log(factorial(5));


/**
 * string reversal
 */
function reverseStr (str){
  let reversed = '';

  for (let index= 0; index < str.length; index ++){
    reversed = str[index] + reversed // olleh
  }
  return reversed
}
console.log(reverseStr('hello'));


/**
 * @param {number[]} nums
 * @return {number[]}
 */

//sort :) quick sort
function quickSort(nums){
  if(nums.length <= 1) return nums;

  let pivot = nums[nums.length - 1];
  let left = [];
  let right = [];

  for(let i = 0; i < nums.length; i++){
    if(nums[i] < pivot){
      left.push(nums[i]);
    }
    if(nums[i] > pivot){
      right.push(nums[i])
    }
  }

  return [... quickSort(left), pivot, ...quickSort(right) ]

}


var sortedSquares = function(nums) {
  //square
  for(let i in nums){
    nums[i] = nums[i] * nums[i]
  }
  return quickSort(nums);

}

console.log(sortedSquares([-10,-7,-2,-1,8,9,10,23]))
