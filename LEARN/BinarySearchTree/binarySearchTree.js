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
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(7));

console.log(tree);