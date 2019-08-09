const string = 'someSmallString';

console.log(Array.from(string).reduceRight((res, item) => res + item, ''))
console.log(Array.from(string).reduce((res, item) => item + res, ''))
console.log(Array.from(string).reverse().join(''))