const number = 10;

function fib(num) {
    const getWithNext = (array) => {
        const length = array.length;
        if (length !== num) {
            array.push(array[length - 1] + array[length - 2]);
            return getWithNext(array);
        }
        return array;
    }

    return getWithNext([1, 1]);
}

function fibLoop(num) {
    const res = [1, 1];
    for(let i = 2; i < num; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
}

console.log(fib(number));
console.log(fibLoop(number));