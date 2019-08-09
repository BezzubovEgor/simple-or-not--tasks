/**
 * @class ListItem
 * @description class that represents linked list item
 */
class ListItem {
    /**
     *Creates an instance of ListItem.
     * @param {*} value - 
     * @param {ListItem} [next=null]
     * @this {ListItem}
     */
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.list = null;
    }

    /**
     * Adds value or other ListItem as next item
     * 
     * @param {*} value
     * @returns {boolean} - if this item attached to list, then rturns true, else false
     * @memberof ListItem
     */
    append(value) {
        if (this.list) {
            this.list.append(value);
            return true;
        }
        const item = ListItem.from(value);
        this.next = item;
        item.prev = this.next;
        return false;
    }


    /**
     * Adds value or other ListItem as prev item
     * 
     * @param {*} value
     * @returns {boolean} - if this item attached to list, then rturns true, else false
     * @memberof ListItem
     */
    prepend(value) {
        if (this.list) {
            this.list.prepend(value);
            return true;
        }
        const item = ListItem.from(value);
        this.next.prev = item;
        item.next = this.next;
        return false;
    }
}


/**
 * Generates list item from some value
 *
 * @param {*} value - value to convert to the ListItem
 * @returns {ListItem} - returns new ListItem created from value
 */
ListItem.from = function(value) {
    if (value instanceof ListItem) {
        return ListItem;
    }
    return new ListItem(value);
}



/**
 * Class that represents LinkedList
 *
 * @class LinkedList
 */
class LinkedList {

    /**
     * Creates an instance of LinkedList.
     * @param {...ListItem} items - several ListItem instances to construct the LinkedList instance
     * @memberof LinkedList
     */
    constructor(...items) {
        this.head = items.reduceRight((res, item, index) => {
            item.next = res;
            item.list = this;
            ++this.size
            if (index === 0) {
                this.tail = item;
            }
            return item;
        }, null);
    }


    /**
     * Adds some value to the end of the linked list
     *
     * @param {*} value - valued to add
     * @memberof LinkedList
     */
    append(value) {
        this.getTail().next = ListItem.from(value);
    }


    /**
     * Adds some value to the start of the linked list
     *
     * @param {*} value
     * @memberof LinkedList
     */
    prepend(value) {
        const item = ListItem.from(value);
        item.next = this.head;
        this.head = item;
    }


    /**
     * Convert LinkedList instance to the Array
     *
     * @returns {Array}
     * @memberof LinkedList
     */
    toArray() {
        return Array.from(this);
    }


    /**
     * Iterator function for the LinkedList instance
     *
     * @returns
     * @memberof LinkedList
     */
    [Symbol.iterator]() {
        let item = this.head;
        return {
            next() {
                if (!item) {
                    return { done: true }
                }
                const result = {
                    done: false,
                    value: item.value,
                };
                item = item.next;
                return result;
            }
        }
    }
}

LinkedList.ListItem = ListItem;


/**
 * Function to convert array of some values to the linked list
 *
 * @param {*} items - array to convert
 * @returns {LinkedList}
 */
LinkedList.from = function linkedListFrom(items) {
    return new LinkedList(...items.map(ListItem.from));
}

module.exports = {
    LinkedList,
    ListItem,
};