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

  addFirst(data){
    const element = new LinkedListNode(data, null);
    if(!this.head){
      this.head = element
      this.tail = element
    }else{
      const newNode = new LinkedListNode(data, this.head)
      this.head = newNode
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
    if(this.head === this.tail) {
      this.head = null
      this.tail = null
      this.size--
      return 
    }

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
    let removedElement;
    if(this.head.element === element){
      removedElement = this.head
      this.head = this.head.nextNode
      return removedElement
    }

    let currentNode = this.head
    while(currentNode){
      if(currentNode.nextNode && currentNode.nextNode.element === element){
        removedElement = currentNode.nextNode
        currentNode.nextNode = currentNode.nextNode.nextNode
        if(removedElement === this.tail){
          this.tail = currentNode
        }
        this.size--
        return removedElement
      }
      currentNode = currentNode.nextNode
    }

    return removedElement
  }

  insertAt(item,index=0){ 
    if(index <= 0){
      this.addFirst(item)
      return
    }

    if(index >= this.size){
      this.add(item)
      return
    }

    let currentIndex = 0
    let currentNode = this.head
    let previousNode = null
    while(currentNode){
      if(currentIndex === index && previousNode){
        const newNode = new LinkedListNode(item, currentNode)
        previousNode.nextNode = newNode
        this.size++
        return
      }
      currentIndex++
      previousNode = currentNode
      currentNode = currentNode.nextNode
    }
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
// console.log("is element removed ?" + ll.removeElement(50).element);
// console.log("is element removed ?" + ll.removeElement(500));
 
// prints 10 20 30 40
ll.printList();
 
// returns 3
console.log("size_of_list " + ll.size_of_list());
console.log("Index of 40 " + ll.indexOf(40));
 
// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 5)
 
ll.printList();
 
// returns false
console.log("is List Empty ? " + ll.isEmpty());
 
// remove 3rd element from the list
console.log(ll.removeFrom(3));
 
// ll.removeFirst();
// ll.removeFirst();
ll.removeLast();
ll.removeLast();
ll.removeLast();
// prints 10 20 60 40
ll.printList();