//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

function reverseString(s) {
  let i = 0; //first
  let j = s.length - 1; //last

  //using the famous in place computer science swap :)
  while (i < j) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;

    i++;
    j--;
  }
  return s;
}

console.log(reverseString(["h","e","l","l","o"]))
