class NonBinaryTreeNode {
    constructor(val, children) {
        this.val = (val===undefined ? 0 : val)
        this.children = (children===undefined ? [] : children)
    }
}

module.exports = { NonBinaryTreeNode };