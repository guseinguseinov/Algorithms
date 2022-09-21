'use strict';

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp(val);
    }

    bubbleUp(val) {
        let index = this.values.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.values[parentIndex] >= this.values[index]) {
                break;
            }
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
        }
    }

    extractMax() {
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
                if (leftElem > element) {
                    swap = leftIndex;
                }
            }

            if (rightIndex < length) {
                rightElem = this.values[rightIndex];
                if (
                    (rightElem > element && !swap) ||
                    (swap && rightElem > leftElem)
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

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(99);
maxBinaryHeap.insert(75);
maxBinaryHeap.insert(96);
maxBinaryHeap.insert(100);
maxBinaryHeap.insert(88);
maxBinaryHeap.insert(45);
maxBinaryHeap.insert(89);
maxBinaryHeap.insert(90);
maxBinaryHeap.extractMax();


console.log(maxBinaryHeap);