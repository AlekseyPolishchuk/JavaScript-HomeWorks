const arr = [1, 6, 7, [5, [5, [6, 3, 7], 3, 6], 6, 7], [8, 4]];

function myFlat(arr) {
  if (arguments.length > 1)
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided'
    );
  const newArr = [];

  function foo(arr) {
    arr.forEach((item) => {
      Array.isArray(item) ? foo(item) : newArr.push(item);
    });
  }
  foo(arr);
  return newArr;
}

console.log(myFlat(arr));
