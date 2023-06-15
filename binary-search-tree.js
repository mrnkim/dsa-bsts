"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {}

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {}

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    /*
      - if there's no root node -> new node = root. return tree.
      - if there's a root node
        - compare root.val with val.
          - if val > root.val -> move to root.right
          - if val < root.val -> move to root.left
            - if (!root.left) -> newNode = root.left
            - if (root.left) compare root.left with val.
              - if root.left.val > val -> move to root.left.left
              - if root.left.val < val -> move to root.left.right
                ...
    */

    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.val > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function _insert(current) {
      if (current.val > val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        _insert(current.left);
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        _insert(current.right);
      }
    }

    _insert(this.root);
    return this;
  }


  /** find(val): Search the BST for a node
   * with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    //15
    let find = false;
    let current = this.root; //10
    let foundNode = undefined;

    if (!this.root) {
      return undefined;
    }

    if (this.root.val === val) {
      return this.root;
    }

    while (!find) {
      if (current.left !== null && current.left.val === val) {
        find = true;
        foundNode = current.left;
      }

      if (current.right !== null && current.right.val === val) {
        find = true;
        foundNode = current.right;
      }

      if (current.left !== null && current.left.val !== val) {
        current = current.left;
      }

      if (current.right !== null && current.right.val !== val) {
        current = current.right;
      }

      if (current.left === null || current.right === null) {
        return undefined;
      }
    }

    return foundNode;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {}

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {}

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}
}

module.exports = {
  BinarySearchTree,
  Node,
};

let largeBST;

  const n10 = new Node(10);
  const n15 = new Node(15);
  const n25 = new Node(25);
  const n40 = new Node(40);
  const n50 = new Node(50);
  const n75 = new Node(75);
  const n100 = new Node(100);

  n50.left = n25;
  n50.right = n75;

  n25.left = n10;
  n25.right = n40;

  n75.right = n100;

  n10.right = n15;

  largeBST = new BinarySearchTree(n50);
  largeBST.insertRecursively(9)