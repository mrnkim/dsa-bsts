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
    let insert = false;
    let current = this.root;

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    while (!insert) {
      if (current.left !== null && current.val > val) {
        current = current.left;
      }

      if (current.right !== null && current.val < val) {
        current = current.right;
      }

      if (current.left === null && current.val > val) {
        current.left = new Node(val);
        insert = true;
      }

      if (current.right === null && current.val < val) {
        current.right = new Node(val);
        insert = true;
      }
    }

    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    let insert = false;
    let current = this.root;

    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    function _insert() {
      if (insert) return;

      if (current.left !== null && current.val > val) {
        current = current.left;
        _insert();
      }

      if (current.right !== null && current.val < val) {
        current = current.right;
        _insert();
      }

      if (current.left === null && current.val > val) {
        current.left = new Node(val);
        insert = true;
        _insert();
      }

      if (current.right === null && current.val < val) {
        current.right = new Node(val);
        insert = true;
        _insert();
      }
    }

    _insert();
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
        current = current.left
      }

      if (current.right !== null && current.right.val !== val) {
        current = current.right
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
