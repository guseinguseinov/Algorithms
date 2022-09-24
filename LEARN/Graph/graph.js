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


    DFSRecursive(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;

        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function helper(vrtx) {
            if (!vrtx) return null;
            visited[vrtx] = true;
            result.push(vrtx);
            adjacencyList[vrtx].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return helper(neighbor);
                }
            });
        })(vertex);

        return result;
    }

    DFSIterative(start) {
        let stack = [];
        let result = [];
        let visited = {};

        stack.push(start);
        visited[start] = true;

        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });

        }
        return result;
    }

    bfs(start) {
        let queue = [start];
        let result = [];
        let visited = {};

        visited[start] = true;

        while (queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.bfs("A"));

console.log(g.adjacencyList);