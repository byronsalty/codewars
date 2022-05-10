// return masked string
function maskify(cc) {
  let arr = cc.split('');
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '#';
  }
  return arr.join('');
}
