

/**
 * Class that represents stack data structure
 *
 * @class Stack
 */
class Stack {
    
    /**
     * Creates an instance of Stack.
     * @memberof Stack
     */
    constructor() {
        this._items = [];
    }

    /**
     * Pushes new item to the stack
     *
     * @param {*} item
     * @returns {number} - new length of stack
     * @memberof Stack
     */
    push(item) {
        return this._items.push(item);
    }


    /**
     * Returns last pushed item of current stack without removing it
     *
     * @returns {*}
     * @memberof Stack
     */
    peek() {
        return this._items[this._items.length - 1];
    }


    /**
     * Returns last pushed item of current stack and remove it
     *
     * @returns {*}
     * @memberof Stack
     */
    pop() {
        return this._items.pop();
    }


    /**
     * Current size of stack
     *
     * @readonly
     * @memberof Stack
     */
    get size() {
        return this._items.length;
    }


    /**
     * Convert this stack to the array
     *
     * @returns {any[]}
     * @memberof Stack
     */
    toArray() {
        return [...this._items];
    }

    
    /**
     * Iterate throught the stack and remove poped values
     *
     * @returns {Iterator}
     * @memberof Stack
     */
    [Symbol.iterator]() {
        return {
            next() {
                const item = this._items.pop();
                return {
                    done: !item,
                    value: item,
                };
            },
        };
    }

    toString() {
        return this._items.toString();
    }
}

/**
 * Creates new stack from array
 *
 * @param {*} array
 * @returns {Stack}
 */
Stack.from = function fromArray(array) {
    const stack = new Stack();
    stack._items = array;
    return stack;
}

module.exports = {
    Stack,
}