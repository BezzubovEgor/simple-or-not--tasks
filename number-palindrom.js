function isNumberPalindrom(number) {
    const array = [];
    let prev = number;
    do {
        array.push(prev % 10);
        prev = (prev / 10) | 0;
    } while(prev !== 0);

    return isPalindrom(array);
}

function isPalindrom(data) {
    const array = Array.from(data);
    for(let i = 0, length = (array.length / 2) | 0; i < length; ++i) {
        if (array[i] !== array[array.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

console.log(isNumberPalindrom(2332112332));
console.log(isPalindrom('ANNA'));