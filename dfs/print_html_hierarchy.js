const { NonBinaryTreeNode } = require("../utilities/nonBinaryTreeNode");

/**
    Given the root node of a tree, print a text representation of the tree in outline form. 
    Assume that each node has properties value and children.

    Example:
                                    html
                    head						  body
            meta   title  link              h1              p
                                                    span   br   span    

    Output:

        html
        - head
            - meta
            - title
            - link
        - body
            - h1
            - p
                - span
                - br
                - span
    
    dfs 
        helper(node, level)
            base case
                console.log(space*level, - , nodeValue)
            recursive case
                console.log(space*level, - , nodeValue)
                foreach child
                    helper(child, level+1)
        helper(root, 0)
 */

const printTree = (root) => {
    const helper = (node, level) => {
        if(level === 0) console.log(node.val)
        else console.log(' '.repeat(level), '- ', node.val)
        node.children.forEach(element => {
            helper(element, level + 1)
        });
    }
    helper(root, 0)
}

const root = new NonBinaryTreeNode('html', [
    new NonBinaryTreeNode('head',[
        new NonBinaryTreeNode('meta'), 
        new NonBinaryTreeNode('title'), 
        new NonBinaryTreeNode('link')
    ]), 
    new NonBinaryTreeNode('body', [
        new NonBinaryTreeNode('h1'), 
        new NonBinaryTreeNode('p', [
            new NonBinaryTreeNode('span'), 
            new NonBinaryTreeNode('br'), 
            new NonBinaryTreeNode('span')
        ]), 
    ])
])

printTree(root)

