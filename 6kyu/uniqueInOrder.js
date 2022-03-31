var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let arr = Array.from(iterable);
  return arr.filter((val, ind) => {return val !== arr[ind+1]})
}
