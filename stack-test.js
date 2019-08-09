const Stack = require('./stack');

const stack = Stack.from([1, 2, 3, 4, 5, 6, 7]);

stack.push(8);
stack.push(9);
stack.push(10);

console.log(stack.peek());
console.log(stack.size);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);

console.log(stack);