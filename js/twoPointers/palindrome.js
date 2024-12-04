//Example 1: Given a string s, return true if it is a palindrome, false otherwise.
// A string is a palindrome if it reads the same forward as backward.
// That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar"

function palindromeCheck(s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindromeCheck('abcdcba'));
