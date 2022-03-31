const convert = (x) => {
  return x.charCodeAt() - 'A'.charCodeAt();
}
const one = () => {
  return convert('B');
}
const two = () => {
  return convert('C');
}
const three = () => {
  return convert('D');
}

var anarchy = function () {
  return 'I can write numbers like, ' + one() +', ' + two() +', ' + three() +'.';
}
