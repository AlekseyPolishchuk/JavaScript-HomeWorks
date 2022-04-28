function myIncludes(arr, item, from = 0) {
  if (from < 0) {
    for (let i = arr.length + from; i < arr.length; i++)
      if (arr[i] === item) return true;
  } else {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) return true;
    }
  }
  return false;
}
