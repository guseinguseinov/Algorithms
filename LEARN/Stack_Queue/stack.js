// it is custom stack data structure 

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // it will add to the begining  
    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let current = this.first;
            this.first = node;
            this.first.next = current;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        let node = this.first;

        if (this.size == 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = node.next;
        }

        this.size--;
        return node.val;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack);