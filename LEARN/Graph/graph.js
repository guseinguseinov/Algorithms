class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) return undefined;
        if (!this.adjacencyList[vertex2]) return undefined;

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v != vertex2
        );

        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v != vertex1
        );
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        for (let i of this.adjacencyList[vertex]) this.removeEdge(vertex, i);
        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('San Francisco');
graph.addEdge('Tokyo', "San Francisco");
graph.addEdge('Tokyo', "Baku");
graph.addEdge("Baku", "San Francisco");
graph.removeVertex("Baku");


console.log(graph);