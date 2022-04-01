function toDayOfYear(arr) {
  
  // Get an object for the date passed in
  const d = new Date(arr[2], arr[1]-1, arr[0]);
  // Get an object for Jan 1
  const first = new Date(arr[2], 0, 1);
  
  // Calculate the seconds difference between these days
  const delta = (d.getTime() - first.getTime()) / 1000;
  
  // Convert seconds into days (and add one since Jan 1 is day 1)
  const days = Math.floor(delta / 86400) + 1;
  return days;
  
}
