function range(start, end) {
    const range = [];
    for(let i = start; i <= end; ++i) {
        range.push(i);
    }
    return range;
}

// greatest common divisor
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

// least common multiple
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

// least common multiple for array of numbers
function lcmForMany(arr) {
    return arr.reduce(lcm, 1);
}

console.log(lcmForMany(range(1, 10)));

