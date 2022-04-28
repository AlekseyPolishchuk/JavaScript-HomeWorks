function myBind(fn, that, ...args) {
  return function () {
    return fn.call(that, ...args);
  };
}

function func(a, b) {
  console.log(this);
  console.log(a + ' & ' + b);
}

const binded = myBind(func, { name: 'Vasya' }, 'First arg', 'Second arg');

binded();
