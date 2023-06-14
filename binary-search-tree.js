"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {

  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    // if there is no root 
      // make the new node with the val
    if (!this.root) this.root = new Node(val);
    
    if (this.root) {
      let current = this.root;

      while(!new Node(val)) {

        if (current.value > val) {
          if (!current.left) {
            current.left = new Node(val);
          } else if (current.left && current.left > val) {
            current = current.left 
            current.left = new Node(val);
          }
        }

        if (current.value < val) {
          if (!current.right) {
            current.right = new Node(val);
          } else if (current.right && current.right < val) {
            current = current.right 
            current.right = new Node(val);
          }
        }
      }

      return this;
    }
    // while (we have a val)
      // new val = 10 
      // current = 50 (root)

      // check the val of 50 > 10 
        // if there is nothing to left of 50  
          // make 10 to the left of 50
      // else
        // current reassigned to left side of current (left side of 50 => 25)
        // compare 25 (cur) > 10 
          // the 10 becomes the 25's left side

      // check the val of 50 < 100 
        // if there is nothing to right of 50  
          // make 100 to the right of 50
      // else
        // current reassigned to right side of current (right side of 50 => 75)
        // compare 75 (curr) < 100 
          // the 100 becomes the 75's right side     
        


  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {

  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
