function arrAdder(arr) {
  let s = ''
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      s = s + arr[j][i];
    }
    s = s + ' ';
  }
  // console.log("s: " + s);
  s = s.trim();
  return s;
}

