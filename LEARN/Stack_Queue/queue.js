class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.first = null;
        this.size = 0;
    }

    // push
    enqueue(val) {
        let node = new Node(val);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    // shift
    dequeue() {
        if (!this.first) return null;

        let node = this.first;

        if (this.size == 1) {
            this.first == null;
            this.last == null;
        } else {
            this.first = node.next;
        }
        this.size--;
        return node.val;
    }

}