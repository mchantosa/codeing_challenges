# Why should we hire you?

Should take one minute; minute and a half at most

##### Prompt

Say: "Why should we hire you?"

##### Do you hear these things?

- _Identify_: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:

  - Technical Skills (libraries, languages, etc.)
  - Interpersonal Skills

- _Prove_: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario) to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

- _Close_: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

# 216 - Lowest Common Ancestor

Given the root node of a binary tree and two distinct values, find the lowest common ancestor.

```
Input: Root Node, Two Integer Values
Output: Integer Value of Lowest Common Ancestor
```

# Example

Input: root, 4, 9 => Output: 7
![LowestCommonAncestor](http://res.cloudinary.com/outco-io/image/upload/v1521248026/LowestCommonAncestor.png)
Copy pastable input
```
        5
    /       \
    2       7
          /    \
          4     8
                  \
                   9
```

# Constraints

```
Time Complexity: O(N)
Auxiliary Space Complexity: O(N)
```

Integer values of nodes are all distinct.

Binary Tree Node has the following properties:

1. `value` (Integer)
2. `right` (Binary Tree Node, default null)
3. `left` (Binary Tree Node, default null)

# Solution

- 1.  Perform a tree traversal to find/collect the path to the first node.

  - Place values of the path into an array (e.g., `[5, 7, 4]`)

- 2.  Perform a tree traversal to find/collect the path to the second node.

  - Place values of the path into second array (e.g., `[5, 7, 8, 9]`)

- 3.  Iterate through both path arrays and compare the values.

- 4.  Return the last matching value. (e.g., return `7`)

# Code Samples to Use for Binary Tree Construction

Copy/paste these chunks directly into Replit

```javascript
// JavaScript

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// DO NOT EDIT
// generate tree from array
function deserialize(arr) {
	if (arr.length === 0) {
		return null;
	}
	let root = new TreeNode(arr[0]);
	let queue = [root];
	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

// DO NOT EDIT
const arr = [5, 2, 7, null, null, 4, 8, null, null, null, 9];

const sampleTree = deserialize(arr);

const lowestCommonAncestor = (root, num1, num2) => {
	// TODO
};
```

```java
import java.util.*;
// Java

// DO NOT EDIT
// TreeNode class for a binary tree node
class TreeNode {
  public int value;
  public TreeNode left;
  public TreeNode right;

  public TreeNode(int value){
    this.value = value;
  }
}


class Main {

  // DO NOT EDIT
  public static int[] arr = {5, 2, 7, -1, -1, 4, 8, -1, -1, -1, 9};

  public static TreeNode sampleTree = deserialize(arr);

  public static void main(String[] args) {
    System.out.println("RESULT: " + lowestCommonAncestor(sampleTree, 4, 9));
  }

  // DO NOT EDIT
  // generate tree from array, null value are represented as -1
  public static TreeNode deserialize(int[] arr) {
    if (arr.length == 0) {
      return null;
    }
    TreeNode root = new TreeNode(arr[0]);
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    TreeNode current;
    for (int i = 1; i < arr.length; i += 2) {
      current = queue.remove();
      if (arr[i] != -1) {
        current.left = new TreeNode(arr[i]);
        queue.add(current.left);
      }
      if (arr[i + 1] != -1 && (i + 1) < arr.length) {
        current.right = new TreeNode(arr[i + 1]);
        queue.add(current.right);
      }
    }
    return root;
  }

  public static int lowestCommonAncestor(TreeNode root) {
    // TODO
    return -1;
  }
}
```

```python
# Python

# DO NOT EDIT
# Node class for a binary tree node
class TreeNode:
    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None


# DO NOT EDIT
# generate tree from list
def deserialize(lst):
    if len(lst) == 0:
        return None
    root = TreeNode(lst[0])
    queue = [root]
    i = 1
    while i < len(lst):
        current = queue.pop(0)
        if lst[i] is not None:
            current.left = TreeNode(lst[i])
            queue.append(current.left)
        if i + 1 < len(lst) and lst[i + 1] is not None:
            current.right = TreeNode(lst[i + 1])
            queue.append(current.right)
        i += 2
    return root

# DO NOT EDIT
lst = [5, 2, 7, None, None, 4, 8, None, None, None, 9]

sample_tree = deserialize(lst)

def lowest_common_ancestor(root):
  # TODO
  pass
```

```csharp
// C#
using System;
using System.Linq;
using System.Collections.Generic;

// DO NOT EDIT
// TreeNode class for a binary tree node
class TreeNode {
  public int value;
  public TreeNode left;
  public TreeNode right;

  public TreeNode(int value){
    this.value = value;
  }
}

class Program {

  // DO NOT EDIT
  public static int[] arr = {5, 2, 7, -1, -1, 4, 8, -1, -1, -1, 9};

  public static TreeNode sampleTree = Deserialize(arr);

  public static void Main (string[] args) {
    Console.WriteLine("RESULT: " + LowestCommonAncestor(sampleTree, 4, 9));
  }

  // DO NOT EDIT
  // generate tree from array, null value are represented as -1
  public static TreeNode Deserialize(int[] arr) {
    if (arr.Length == 0) {
      return null;
    }
    TreeNode root = new TreeNode(arr[0]);
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    TreeNode current;
    for (int i = 1; i < arr.Length; i += 2) {
      current = queue.Dequeue();
      if (arr[i] != -1) {
        current.left = new TreeNode(arr[i]);
        queue.Enqueue(current.left);
      }
      if (arr[i + 1] != -1 && (i + 1) < arr.Length) {
        current.right = new TreeNode(arr[i + 1]);
        queue.Enqueue(current.right);
      }
    }
    return root;
  }


  public static int LowestCommonAncestor(TreeNode root) {
    // TODO
    return -1;
  }
}
```

# Code

```javascript
function LowestCommonAncestor(root, num1, num2) {
	let result = -1;

	let arr1 = [];
	let arr2 = [];

	let path = [];

	function ancestorPath(node) {
		if (node === null) {
			return;
		}
		path.push(node.value);

		if (node.value === num1) {
			arr1 = path.slice();
		}

		if (node.value === num2) {
			arr2 = path.slice();
		}

		ancestorPath(node.left);
		ancestorPath(node.right);
		path.pop();
	}

	ancestorPath(root);

	let i = 0;

	while (arr1[i] === arr2[i]) {
		result = arr1[i];
		i++;
	}

	return result;
}
```

```python

# Alternate pure recursion approach in python

def lowest_common_ancestor(root, a, b):
    if root is None:
        return
    if root.value == a or root.value == b:
        return root
    left = lowest_common_ancestor(root.left, a, b)
    right = lowest_common_ancestor(root.right, a, b)
    if left and right:
        return root
    elif left and not right:
        return left
    elif right and not left:
        return right
    else:
        return

```

# Notes

Facebook technical screen problem

# Resources

http://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/
