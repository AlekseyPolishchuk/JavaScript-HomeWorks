function myLastIndexOf(arr, item, from = arr.length - 1) {
  if (from < 0) {
    for (let i = arr.length + from; i >= 0; i--) {
      if (arr[i] === item) return i;
    }
  }
  for (let i = from; i >= 0; i--) {
    if (arr[i] === item) return i;
  }
  return -1;
}
