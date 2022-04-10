function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  
  const avg = classPoints.reduce((a,b) => {return a+b}) / classPoints.length;
  return yourPoints > avg;
}

