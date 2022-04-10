function isPalin(num) {
  const numStr = '' + num;
  for (let i = 0; i < (numStr.length / 2); i++) { 
    let left = numStr[i];
    let right = numStr[numStr.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

function palindrome(num) { 
  //Code goes here
  if (typeof num === 'string' || num < 0) {
    return 'Not valid';
  }
  if (num <= 11) {
    return 11;
  }
  
  console.log("input " + num);
  let keepGoing = true;
  let i = 0;
  while (keepGoing) {
    if (isPalin(num + i)) {
      num = num + i;
      keepGoing = false;
    } else if (isPalin(num - i)) {
      num = num - i;
      keepGoing = false;
    }
    i++;
  }
  return num;
}
