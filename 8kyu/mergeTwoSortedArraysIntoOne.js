function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2);
  newArr.sort((a,b) => {return a - b});

  newArr = newArr.filter((val, ind) => {return val != newArr[ind + 1]})
  
  return newArr;
}
