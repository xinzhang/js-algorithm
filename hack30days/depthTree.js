function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        if (data <= root.data) {
            if (root.left) this.insert(root.left, data)
            else root.left = new Node(data)
        }
        else {
            if (root.right) this.insert(root.right, data)
            else root.right = new Node(data);
        }
        return this.root;
    }

    this.levelOrder = function(root) {
        let output = '';

        const visiting = [root];
        while (visiting.length) {
            const node = visiting.shift();
            output += node.data + ' ';
            if (node.left) visiting.push(node.left);
            if (node.right) visiting.push(node.right)
        }

        process.stdout.write(output.trim())
    }

}
