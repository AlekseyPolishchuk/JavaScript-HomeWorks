function myFind(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return arr[i];
  }
  return undefined;
}
