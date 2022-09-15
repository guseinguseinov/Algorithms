'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let tail = this.tail;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            tail.prev = null; // optional
        }
        this.length--;
        return tail;
    }

    shift() {
        if (!this.head) return undefined;
        let node = this.head;
        if (this.length == 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;// again this is optional 
        }

        this.length--;
        return node;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            oldHead.prev = node;
            node.next = oldHead;
            this.head = node;

        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let mid = Math.floor(this.length / 2);
        if (mid >= index) {
            let head = this.head;
            for (let i = 0; i <= mid; i++) {
                if (i == index) {
                    return head;
                }
                head = head.next;
            }
        } else {
            let tail = this.tail;
            for (let i = this.length - 1; i >= mid; i--) {
                if (i == index) {
                    return tail;
                }
                tail = tail.prev;
            }
        }
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index == 0) return !!this.unshift(value);

        if (index == this.length) return !!this.push(value);

        let prev = this.get(index - 1);
        let node = new Node(value);
        node.next = prev.next;
        prev.next.prev = node;

        node.prev = prev;
        prev.next = node;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;

        if (index == 0) return this.shift();

        if (index == this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let deletedNode = prev.next;
        deletedNode.next.prev = prev;
        prev.next = deletedNode.next;

        deletedNode.prev = null;
        deletedNode.next = null;

        this.length--;
        return deletedNode;

    }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.remove(2);

console.log(list);