'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push to the end of the linked list  
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.head;
    }

    // pop from the end of the linked list
    pop() {
        var current = this.head;
        if (!current) return undefined;

        let pre = current;
        while (current.next) {
            pre = current;
            current = current.next;
        }
        pre.next = null;
        this.tail = pre;
        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // get the begining of the linked list
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length == 0) this.tail = null;
        return current;
    }

    // push the begining of the linked list
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    // get the n-th index of linked list
    get(index) {
        if ((0 > index) || (index >= this.length)) return null;

        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                return current;
            }
            current = current.next;
            count++;
        }
    }

    // set  the n-th index to the given value
    set(index, value) {
        let indexNode = this.get(index);
        if (!indexNode) return false;
        indexNode.val = value;
        return true;
    }

    insert(index, value) {
        if ((0 > index) || (index > this.length)) return false;

        if (index == this.length) return !!this.push(value);

        if (index == 0) return !!this.unshift(value);


        let node = this.get(index - 1);
        let newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;
        this.length++;

        return true;
    }
}

let first = new SinglyLinkedList();
first.push(3);
first.push(2);
first.push(4);
first.push(5);
first.push(6);
first.push(7);

first.pop();

first.shift();

first.unshift(8);

first.get(4);
first.set(4, 100);

first.insert(0, 99);
first.insert(1, 55);
first.insert(2, 200);


console.log(first);