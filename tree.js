class Node{
  constructor(data){
    this.data = data
    this.leftNode = null
    this.rightNode = null
  }
}

export class BinarySearchTree{
  constructor(){
    this.root = null
  }

  insert(data){
    const newNode = new Node(data)
    if(this.root === null){
      this.root = newNode
      return true
    }

    let currentNode = this.root
    while(currentNode){
      if(data === currentNode.data) return
      if(data < currentNode.data){
        if(currentNode.leftNode === null) {
          currentNode.leftNode = newNode
          return true
        }
        currentNode = currentNode.leftNode
      }else{
        if(currentNode.rightNode === null) {
          currentNode.rightNode = newNode
          return true
        }
        currentNode = currentNode.rightNode
      }
    }
  }

  _getChildCount(node){
    let count = 0
    if(node.leftNode !== null){
      count++
    }
    if(node.rightNode !== null){
      count++
    }

    return count
  }

  remove(data){
    if(this.root === null) return false
    
    let currentNode = this.root
    while(currentNode){
      if(data === currentNode.data) return false
      if(data < currentNode.data){
        const foundNode = currentNode.leftNode && currentNode.leftNode.data === data
        const hasZerochild = foundNode && this._getChildCount(currentNode.leftNode) === 0
        const hasOnechild = foundNode && this._getChildCount(currentNode.leftNode) === 1
        
        // if delete node has 0 child
        if(hasZerochild) {
          const deletedNode = currentNode.leftNode
          currentNode.leftNode = null
          return deletedNode
        }
        
        // if delete node has 1 child
        if(hasOnechild) {
          let replaceNode = null
          if(currentNode.leftNode.leftNode === null){
            replaceNode = currentNode.leftNode.rightNode
          }else{
            replaceNode = currentNode.leftNode.leftNode
          }
          const deletedNode = currentNode.leftNode
          currentNode.leftNode = replaceNode
          return deletedNode
        }
        
        currentNode = currentNode.leftNode
      }else{
        const foundNode = currentNode.rightNode && currentNode.rightNode.data === data
        const hasZerochild = foundNode && this._getChildCount(currentNode.rightNode) === 0
        const hasOnechild = foundNode && this._getChildCount(currentNode.rightNode) === 1
        
        // if delete node has 0 child
        if(hasZerochild) {
          const deletedNode = currentNode.rightNode
          currentNode.rightNode = null
          return deletedNode
        }
        
        // if delete node has 1 child
        if(hasOnechild) {
          let replaceNode = null
          if(currentNode.rightNode.leftNode === null){
            replaceNode = currentNode.rightNode.rightNode
          }else{
            replaceNode = currentNode.rightNode.leftNode
          }
          const deletedNode = currentNode.rightNode
          currentNode.rightNode = replaceNode
          return deletedNode
        }

        currentNode = currentNode.rightNode
      }
    }

    return false
  }

  find(data){
    if(this.root === null) return false

    let currentNode = this.root
    while(currentNode){
      if(data === currentNode.data) return currentNode
      if(data < currentNode.data){
        currentNode = currentNode.leftNode
      }else{
        currentNode = currentNode.rightNode
      }
    }

    return false
  }

  getRootNode(){
    return this.root
  }

  inorder(node){
    if(node !== null){
      this.inorder(node.leftNode)
      console.log(node.data);
      this.inorder(node.rightNode)
    }
  }

  preorder(node){
    if(node !== null){
      console.log(node.data);
      this.preorder(node.leftNode)
      this.preorder(node.rightNode)
    }
  }

  postorder(node){
    if(node !== null){
      this.postorder(node.leftNode)
      this.postorder(node.rightNode)
      console.log(node.data);
    }
  }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// BST.insert(50);
// BST.insert(47);
// BST.insert(59);
// BST.insert(48);
// BST.insert(7);

               
// find node 
// console.log(BST.find(15));
// console.log(JSON.stringify(BST.find(15), null, 2));
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 
 
var root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
console.log('====================================');
console.log('before start');
BST.inorder(root);
console.log('before end');
console.log('====================================');

// Removing node with no children 
console.log("removed Node : ", BST.remove(5)); 
             
             
// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //       \    /
// //        9  17 
             
                         
var root = BST.getRootNode();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// // Removing node with one child 
console.log("removed Node : ", BST.remove(7)); 
             
// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      9  13 22  27
// //            /
// //           17 
             
             
var root = BST.getRootNode();
console.log('---');
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with two children 
console.log("removed Node : ", BST.remove(15)); 
     
// //          17
// //         /  \
// //        10   25
// //       / \   / \
// //      9  13 22  27
 
// var root = BST.getRootNode();
// console.log("inorder traversal");
 
// // prints 9 10 13 17 22 25 27
// BST.inorder(root);
             
// console.log("postorder traversal");
// BST.postorder(root);
// console.log("preorder traversal");
// BST.preorder(root);