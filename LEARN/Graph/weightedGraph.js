const PriorityQueue = require("../BinaryHeaps/priorityQueue");
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     enqueue(val, priority) {
//         this.values.push({ val, priority });
//         this.sort();
//     };
//     dequeue() {
//         return this.values.shift();
//     };
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     };
// }

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    dijkstra(start, end) {
        let distances = {};
        let priorityQueue = new PriorityQueue();
        let previous = {};
        let current;
        let path = [];


        for (let key in this.adjacencyList) {
            if (key == start) {
                priorityQueue.enqueue(key, 0);
                distances[key] = 0;
            } else {
                priorityQueue.enqueue(key, Infinity);
                distances[key] = Infinity;
            }
            previous[key] = null;
        }

        while (priorityQueue.values.length) {
            current = priorityQueue.dequeue().val;
            if (current == end) {
                while (previous[current]) {
                    path.push(current);
                    current = previous[current];
                }
                break;
            }

            if (current || distances[current] !== Infinity) {
                for (let neighbor in this.adjacencyList[current]) {
                    let nextNode = this.adjacencyList[current][neighbor];
                    let candidate = distances[current] + nextNode.weight;
                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = current;
                        priorityQueue.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        return path.concat(current).reverse();
    }
}

const graph = new WeightedGraph();

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("A", "E"));
