function sameCase(a, b){
  let letter = new RegExp("[A-Za-z]");
  if (!a.match(letter) || !b.match(letter)) {
    return -1;
  }
  let upper = new RegExp("[A-Z]");
  let lower = new RegExp("[a-z]");
  if (a.match(upper) && b.match(upper)) {
    return 1;
  }
  if (a.match(lower) && b.match(lower)) {
    return 1;
  }
  return 0;
}
