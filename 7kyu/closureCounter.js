function counter(){
  let cnt = 0;
  
  return () => { return ++cnt}
}
