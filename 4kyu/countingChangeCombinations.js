const calc = (arr) => {
  if (typeof arr === 'undefined') {
    return -1
  } else {
    return arr.reduce((a,b) => {return a*b});
  }
}

const last = (arr) => {
  return arr[arr.length - 1];
}

const recurChange = (acc, used, rem, coins) => {
  let newAcc = [...acc];
  for (let i = 0; i < coins.length; i++) {
    let newRem = rem - coins[i];
    if (newRem === 0 && (used.length == 0 || coins[i] >= last(used))) {
      let newUsed = [...used, coins[i]];
      newAcc.push(newUsed);
    } else if (newRem > 0 && (used.length == 0 || coins[i] >= last(used))) {
      let newUsed = [...used, coins[i]];
      newAcc = newAcc.concat(recurChange(acc, newUsed, newRem, coins));
    }
  }
  return newAcc;
}



var countChange = function(money, coins) {
  // your implementation here
  console.log("m: " + money + " c: " + coins);
  coins = coins.sort((a,b) => {return a-b});
  let found = recurChange([], [], money, coins);

  return found.length;
}
