const LinkedList = require('./linked-list');

const list = LinkedList.from([1, 2, 3, 4, 5, 6]);

function reverse(list) {
    const head = list.head;

    let current = head;
    let prev = null; 
    let next = null;


    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
    } 
    list.head = prev;
    return list;
}

reverse(list);

console.log(list.toArray())
