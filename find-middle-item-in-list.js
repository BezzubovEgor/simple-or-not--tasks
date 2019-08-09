const LinkedList = require('./linked-list');


const list = LinkedList.from(['hello','world', 'piu', 'paf', 'name']);

function findMiddleNode(list) {
    const head = list.head;

    let itemIndex = 0;
    let middleItem = head;
    let currentItem = head;

    do {
        if (itemIndex % 2 === 0) {
            middleItem = middleItem.next;
        }
        currentItem = currentItem.next;
        ++itemIndex;
    } while (currentItem.next)

    return middleItem;
}

console.log(findMiddleNode(list).value);