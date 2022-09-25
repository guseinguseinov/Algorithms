'use strict';

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// minimum binary heap
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp(node);
    }

    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[parentIndex].priority <= this.values[index].priority) {
                break;
            }
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
        }
    }

    dequeue() {
        let startElement = this.values[0];
        let lastElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return startElement;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let leftElem, rightElem;
            let swap = null;

            if (leftIndex < length) {
                leftElem = this.values[leftIndex];
                if (leftElem.priority < element.priority) {
                    swap = leftIndex;
                }
            }

            if (rightIndex < length) {
                rightElem = this.values[rightIndex];
                if (
                    (rightElem.priority < element.priority && !swap) ||
                    (swap && rightElem.priority < leftElem.priority)
                ) {
                    swap = rightIndex;
                }
            }

            if (!swap) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

const priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("common cold", 5);
// priorityQueue.enqueue("Gunshut guy", 1);
// priorityQueue.enqueue("high fiver", 4);
// priorityQueue.enqueue("broken arm", 2);
// priorityQueue.enqueue("glass in foot", 3);
// priorityQueue.dequeue();
// console.log(priorityQueue);

module.exports = PriorityQueue;