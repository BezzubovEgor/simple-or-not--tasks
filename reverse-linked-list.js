const LinkedList = require('./linked-list');

const list = LinkedList.from([1, 2, 3, 4, 5, 6]);

function reverse(list) {
    const head = list.head;


    let current = head.next;
    let prev = head;
    let next = current.next;


    while (next.next) {
        // current.next = prev;
        // prev = current;
        // const linkToNext = next;
        // next = next.next;
        // linkToNext.next = current;
    } 
    head.next = null;
    return list;
}

reverse(list);

console.log(list.toArray())