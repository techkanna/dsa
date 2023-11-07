export class LinkedListNode {
  constructor(element,nextNode){
    this.element = element;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  add(data){
    const element = new LinkedListNode(data, null);
    if(!this.head){
      this.head = element
      this.tail = element
    }else{
      this.tail.nextNode = element
      this.tail = element
    }

    this.size++
  }

  removeFirst(){
    if(this.size == 0) return null
    this.size--
    if(this.head === this.tail) {
      this.head = null
      this.tail = null
      return 
    }
    const nextNode = this.head.nextNode
    this.head = nextNode
  }

  removeLast(){
    if(this.size == 0) return null
    let currentNode = this.head
    while(currentNode){
      if(currentNode.nextNode === this.tail){
        currentNode.nextNode = null
        this.tail = currentNode
        this.size--
      }
      currentNode = currentNode.nextNode
    }

  }

  removeElement(element){

  }

  insertAt(item,index){

  } 

  removeFrom(index){

  }

  indexOf(element){
    let index = -1
    let currentNode = this.head
    let isFound=false
    while(currentNode) {
      index++
      if(currentNode.element == element) {
        isFound = true
        break
      }
      currentNode = currentNode.nextNode
    }
    return isFound ? index : -1     
  }

  printList(){
    let str = ''
    let currentNode = this.head
    while(currentNode) {
      str += currentNode.element + ' '
      currentNode = currentNode.nextNode
    }
    console.log(str)
  }

  size_of_list(){
    return this.size
  }
}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());
 
// adding element to the list
ll.add(10);
 
// prints 10
ll.printList();
 
// returns 1
console.log(ll.size_of_list());
 
// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
 
// returns 10 20 30 40 50
ll.printList();
 
// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));
 
// prints 10 20 30 40
ll.printList();
 
// returns 3
console.log("Index of 40 " + ll.indexOf(10));
 
// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);
 
ll.printList();
 
// returns false
console.log("is List Empty ? " + ll.isEmpty());
 
// remove 3rd element from the list
console.log(ll.removeFrom(3));
 
ll.removeFirst();
ll.removeFirst();
ll.removeLast();
ll.removeLast();
ll.removeLast();
// prints 10 20 60 40
ll.printList();