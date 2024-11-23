function reverseInt(num) {
  let str = Math.abs(num).toString();

  if (num < 0) {
    return reverse(str) * -1;
  } else if (num >= 0 && num < 10) {
    return num;
  } else {
    return reverse();
  }
}

function reverse(str) {
  let reversedStr = ''
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return parseInt(reversedStr);
}

console.log(reverseInt(-5000), "Answer")
