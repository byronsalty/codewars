function knightVsKing(knightPosition, kingPosition) {
  // Three possible outputs are "Knight", "King" and "None".
  // Happy Coding :)
  let [knNum, knLet] = knightPosition;
  let [kNum, kLet] = kingPosition;
  knLet = knLet.charCodeAt();
  kLet = kLet.charCodeAt();
  
  if ((Math.abs(knNum - kNum) <= 1) &&
      (Math.abs(knLet - kLet) <= 1)) {
    return "King"
  } else if ((Math.abs(knNum - kNum) == 2) &&
      (Math.abs(knLet - kLet) == 1)) {
    return "Knight"
  } else if ((Math.abs(knNum - kNum) == 1) &&
      (Math.abs(knLet - kLet) == 2)) {
    return "Knight"
  } else {
    return "None"
  }
}

