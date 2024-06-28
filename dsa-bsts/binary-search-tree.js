class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    
    //If the BST is empty. Set root node as newNode and return.
     if(!this.root){
       this.root = new Node(val);
       return this
     }
     
    let currentNode = this.root;
     

    //where there is a current node, compare currentNode against newnode
    while(currentNode){
      // if newNode is less than currentNode and there is a currentNode.left. currentNode pointer to be currentNode.left
      if(val < currentNode.val){
        if(currentNode.left){
          currentNode = currentNode.left
        } else {
        currentNode.left = new Node(val)
        return this;
      }}

      // if newNode is greater than currentNode and there is a currentNode.right. currentNode pointer to be currentNode.right
      else if(val > currentNode.val){
        if(currentNode.right){
          currentNode = currentNode.right
        } else {
          currentNode.right = new Node(val)
          return this
        }
      }
      
    }  
  }

//   

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(!this.root){
      this.root = new Node(val);
      return this
    }

     //where there is a current node, compare currentNode against newnode
      if(val < current.val){
        if(!current.left){
          current.left = new Node(val);
          return this;
        } 
        return this.insertRecursively(val, current.left);
      }
      else {
        if(!current.right){
          current.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, current.right)

      }
    }  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    
      //If the BST is empty. Set root node as newNode and return.
      if(!this.root){
        this.root = newNode
      }
      
     let currentNode = this.root;

     // check first node value against currentNode value and pick a left or right as new pointer.

     while(currentNode){

      if(currentNode.val === val ) return currentNode
      else if(val < currentNode.val){
        currentNode = currentNode.left
      }
      else{
        currentNode = currentNode.right
      }
     }

     return undefined

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current=this.root) {
    if(!this.root){
      return undefined
    }

    if(val < current.val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    }
    else if(val > current.val){
      if(current.right === null) return undefined
      return this.findRecursively(val, current.right);
    }

    return current

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

      //If the BST is empty. Set root node as newNode and return.
      if(!this.root){
        return undefined
      }
      
    let visitedNodes = [];
    let currentNode = this.root;
     

     const traverse = (node) => {
      
       visitedNodes.push(node.val); 
       node.left && traverse(node.left);
       node.right && traverse(node.right);
       
     }

     traverse(currentNode);
     return visitedNodes


  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

     //If the BST is empty. Set root node as newNode and return.
     if(!this.root){
      return undefined
    }
    
  let visitedNodes = [];
  let currentNode = this.root;
   

   const traverse = (node) => {
    
     node.left && traverse(node.left);
     visitedNodes.push(node.val); 
     node.right && traverse(node.right);
     
   }

   traverse(currentNode);
   return visitedNodes

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
     //If the BST is empty. Set root node as newNode and return.
     if(!this.root){
      return undefined
    }
    
  let visitedNodes = [];
  let currentNode = this.root;
   

   const traverse = (node) => {
    
     node.left && traverse(node.left);
     node.right && traverse(node.right);
     visitedNodes.push(node.val); 
     
   }

   traverse(currentNode);
   return visitedNodes

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    //If the BST is empty. Set root node as newNode and return.
    if(!this.root){
      return undefined
    }
    
  let visitedNodes = [];
  let current = this.root;
  let queue = [];

  queue.push(current)
   
    while (queue.length){
      current = queue.shift();
      visitedNodes.push(current.val);
      if (current.left){
        queue.push(current.left);
      }
      if (current.right){
        queue.push(current.right);
      }

      
    }

   return visitedNodes

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
