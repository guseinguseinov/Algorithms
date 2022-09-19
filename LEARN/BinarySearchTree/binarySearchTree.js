class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        }
        let current = this.root;
        while (true) {
            if (value == current.val) return undefined;

            if (value < current.val) {
                if (!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else if (value > current.val) {
                if (!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (!this.root) return false;

        let current = this.root;
        while (true) {
            if (value == current.val) return true;

            if (value < current.val) {
                if (!current.left) return false;
                current = current.left;
            } else if (value > current.val) {
                if (!current.right) return false;
                current = current.right;
            }
        }
    }

    BFS() {
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }


    // Here begins DFS methods
    preOrder() {
        let visited = [];

        function helper(node) {
            visited.push(node.val);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }
        helper(this.root);
        return visited;
    }

    postOrder() {
        let visited = [];

        function helper(node) {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            visited.push(node.val);
        }
        helper(this.root);
        return visited;
    }

    inOrder() {
        let visited = [];

        function helper(node) {
            if (node.left) helper(node.left);
            visited.push(node.val);
            if (node.right) helper(node.right);
        }
        helper(this.root);
        return visited;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(tree);