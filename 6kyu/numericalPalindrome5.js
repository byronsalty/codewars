function palindrome(num) { 
  if (typeof(num) !== 'number' || num < 0) {
    return "Not valid";
  } else if (num < 10) {
    return false;
  } else {
    let s = '' + num;
    let single = false;
    s = s.split('').sort().join('');
    const re = new RegExp('^(?:(.)\\1)*.?(?:(.)\\2)*$')
    return s.match(re) !== null 
  }
}