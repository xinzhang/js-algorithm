function BST(value) {
    this.value = value
    this.left = null
    this.right = null
}

BST.prototype.insert = function(value) {
    if (value <= this.value) {
        if (!this.left) {
            this.left = new BST(value)
        } else {
            this.left.insert(value)
        }
    }

    else if (value > this.value) {
        if (!this.right) {
            this.right = new BST(value)
        } else {
            this.right.insert(value)
        }
    }
}

BST.prototype.traverse = function(cb) {
    if (this.left) this.left.traverse(cb)
    cb(this.value)
    if (this.right) this.right.traverse(cb)
}

BST.prototype.getMinValue = function() {
    if (!this.left) {
        return this.value
    } else {
        return this.left.getMinValue();
    }
}

BST.prototype.getMaxValue = function() {
    if (!this.right) {
        return this.value
    } else {
        return this.right.getMaxValue();
    }
}

///////////

var numbers = [45,34,2,4,12,21,34,76,56,8,55,88,74,45,103, 78]

var myTree = new BST(numbers[0])

numbers.slice(1).forEach( (v) => {
    myTree.insert(v);
});

myTree.traverse( (v)=> {
    console.log(v)
});

console.log(`Max: ${myTree.getMaxValue()}, Min: ${myTree.getMinValue()}`);
