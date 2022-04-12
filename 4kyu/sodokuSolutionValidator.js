function validate(orig) {
  let nine = [...orig];
//   console.log("starting nine: " + nine);
  nine = nine.sort((a,b) => {return b -a});
  nine = nine.filter((a, ind) => {return a !== nine[ind+1]});
//   console.log("now nine: " + nine);
  return nine.length === 9;
}

function validSolution(board){
  console.log(JSON.stringify(board));
  // check rows
  console.log("checking rows");
  for (let i = 0; i < 9; i++) {
    if (!validate(board[i])) {
      return false;
    }
  }

  
  // check columns
  console.log("checking cols");
  //console.log(JSON.stringify(board));
  for (let i = 0; i < 9; i++) {
    let acc = []
    for (let j = 0; j < 9; j++) {
      acc.push(board[j][i]);
    }
    console.log("checking : " + acc);
    if (!validate(acc)) {
      console.log("didnt validate");
      return false;
    }
  }
  
  // check blocks
  console.log("checking blocks");
  let offsets = [
    [0,0],
    [0,3],
    [0,6],
    [3,0],
    [3,3],
    [3,6],
    [6,0],
    [6,3],
    [6,6]
  ]
  for (let block = 0; block < offsets.length; block++) {
    let xx = offsets[block][0];
    let yy = offsets[block][1];
    let acc = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        acc.push(board[j+xx][i+yy]);
      }
    }
    console.log("checking : " + acc);
      if (!validate(acc)) {
        console.log("didnt validate");
        return false;
      }
  }
  
  return true;
}
     
