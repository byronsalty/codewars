function longest(s1, s2) {
  return s1.concat(s2).split('').sort().filter((v,i,a) => {return v != a[i+1]}).join('')
}