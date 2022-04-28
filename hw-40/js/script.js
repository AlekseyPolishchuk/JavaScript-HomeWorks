function multiply(num) {
    return num * num;
}

function cacheFunctionResult(func) {
    const cache = {};

    return function (num) {
        if (num in cache) {
            return cache[num];
        } else {
            const result = func(num);
            cache[num] = result;
            return result;
        }
    };
}

const cached = cacheFunctionResult(multiply);

console.log(cached(1));
console.log(cached(5));
console.log(cached(8));
console.log(cached(8));
console.log(cached(1));
