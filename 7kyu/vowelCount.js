function getCount(str) {

  return str.split('').filter(x => x.match(/[aeiou]/)).length
}
