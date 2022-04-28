function myIndexOf(arr, item, from = 0) {
  if (from < 0) {
    for (let i = arr.length + from; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
  }
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}
