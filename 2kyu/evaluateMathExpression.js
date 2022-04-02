const addFunc = (a,b) => {return a + b};
const subFunc = (a,b) => {return a - b};
const multFunc = (a,b) => {return a * b};
const divFunc = (a,b) => {return a / b};
const genRe = (sym) => {return new RegExp('.*?((\\-?\[\\d\\.\]+)\\' + sym + '(\\-?\[\\d\\.\]+)).*?')};

const runExp = (exp, re, op) => {
  let m = exp.match(re);
  let matchedExp = exp.match(re)[1];
  let value = op(parseFloat(m[2]), parseFloat(m[3]));

  return exp.replace(matchedExp, value);
}

var calc = function (exp) {
  // We don't need any whitespace
  exp = exp.replace(/ /g,'');

  const doubleNeg = new RegExp('(\[\\+\\-\\*\\/\])\\-\\-', 'g');
  exp = exp.replace(doubleNeg, '$1');
  exp = exp.replace(/^--/, '');

  console.log("exp: " + exp);

  // Let's pull out the parens and recursively evaluate
  const parens = new RegExp('^.*(\\(\[\^\\(\\)\]*?\\)).*$');
  const plus = genRe('+');
  const minus = genRe('-');
  const mult = genRe('*');
  const div = genRe('/');
  
  if (exp.match(parens)) {
    let matchedExp = exp.match(parens)[1];
    let stripped = matchedExp.substr(1, matchedExp.length - 2);
    let value = calc(stripped);
    let newExp = exp.replace(matchedExp, value);
    return calc(newExp);
  } else if (exp.match(mult) && exp.match(div)) {
    console.log("both mult and div found picking first...");
    let multInd = exp.match(/\*/)['index'];
    let divInd = exp.match(/\//)['index'];
    console.log("m-ind: " + multInd + " d-ind: " + divInd);
    if (multInd < divInd) {
      console.log("found a mult: " + exp);
      let newExp = runExp(exp, mult, multFunc)
      console.log("new exp: " + newExp);
      return calc(newExp);
    } else {
      console.log("found a div: " + exp);
      let newExp = runExp(exp, div, divFunc)
      console.log("new exp: " + newExp);
      return calc(newExp);
    }
  } else if (exp.match(mult)) {
    console.log("found a mult: " + exp);
    let newExp = runExp(exp, mult, multFunc)
    console.log("new exp: " + newExp);
    return calc(newExp);
  } else if (exp.match(div)) {
    console.log("found a div: " + exp);
    let newExp = runExp(exp, div, divFunc)
    console.log("new exp: " + newExp);
    return calc(newExp);
  } else if (exp.match(plus) && exp.match(minus)) {
    console.log("both plus and minus found picking first...");
    let plusInd = exp.match(/\+/)['index'];
    let minusInd = exp.match(/\-/)['index'];
    if (plusInd < minusInd) {
      console.log("found a plus: " + exp);
      let newExp = runExp(exp, plus, addFunc)
      console.log("new exp: " + newExp);
      return calc(newExp);
    } else {
      console.log("found a minus: " + exp);
      let newExp = runExp(exp, minus, subFunc)
      console.log("new exp: " + newExp);
      return calc(newExp);
    }
  } else if (exp.match(plus)) {
    console.log("found a plus: " + exp);
    let newExp = runExp(exp, plus, addFunc)
    console.log("new exp: " + newExp);
    return calc(newExp);
  } else if (exp.match(minus)) {
    console.log("found a minus: " + exp);
    let newExp = runExp(exp, minus, subFunc);
    console.log("new exp: " + newExp);
    return calc(newExp);
  } else {
    console.log("apparently down to just a number: " + exp);
    return parseFloat(exp)
  }
  
};