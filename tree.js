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

  remove(data){
    if(this.root === null) return false
    
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
// BST.inorder(root);

// // Removing node with no children 
// BST.remove(5);
             
             
// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //       \    /
// //        9  17 
             
                         
// var root = BST.getRootNode();
             
// // prints 7 9 10 13 15 17 22 25 27
// BST.inorder(root);
             
// // Removing node with one child 
// BST.remove(7);
             
// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      9  13 22  27
// //            /
// //           17 
             
             
// var root = BST.getRootNode();
 
// // prints 9 10 13 15 17 22 25 27
// BST.inorder(root);
             
// // Removing node with two children 
// BST.remove(15);
     
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