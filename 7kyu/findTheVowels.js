function vowelIndices(word){
  //your code here
  let acc = []
  const re = new RegExp("[AEIOUYaeiouy]");
  for(let i = 0; i < word.length; i++) {
    if (word[i].match(re)) {
      acc.push(i+1);
    }
  }
  return acc;
}
