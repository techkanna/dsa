import { Heap } from './heap.js';

// queue [firt in first out]

export class Queue{
  constructor(){
    this.firstIndex = 0
    this.lastIndex = 0
    this.itemList={}
  }

  enqueue(item){
    this.itemList[this.lastIndex]=item
    this.lastIndex++
  }

  dequeue(){
    const result = this.itemList[this.firstIndex]
    delete this.itemList[this.firstIndex]
    this.firstIndex++
    return result
  }

  peek(){
    return this.itemList[this.firstIndex]
  }

  isEmpty(){
    return Boolean(Object.keys(this.itemList).length)
  }

  printQueue(){
    return this.itemList
  }
}

// const queue = new Queue()
// console.log(queue.isEmpty() == false) 
// queue.enqueue(7)
// queue.enqueue(2)
// queue.enqueue(6)
// queue.enqueue(4)
// console.log(queue.dequeue()==7)
// console.log(queue.peek() == 2) 
// console.log(queue.isEmpty() == true) 
// console.log(queue.printQueue()) 

export class QueueArray{
  constructor(){
    this.firstIndex = 0
    this.lastIndex = 0
    this.itemList=[]
  }

  enqueue(item){
    this.itemList.push(item)
  }

  dequeue(){
    return this.itemList.shift()
  }

  peek(){
    return this.itemList[0]
  }

  isEmpty(){
    return Boolean(this.itemList.length)
  }

  printQueue(){
    return this.itemList
  }
}

// const queue = new QueueArray()
// console.log(queue.isEmpty() == false) 
// queue.enqueue(7)
// queue.enqueue(2)
// queue.enqueue(6)
// queue.enqueue(4)
// console.log(queue.dequeue()==7)
// console.log(queue.peek() == 2) 
// console.log(queue.isEmpty() == true) 
// console.log(queue.printQueue())


// helper class
class QElement {
  constructor(element, priority)
  {
      this.element = element;
      this.priority = priority;
  }
}

// PriorityQueue [item will out based on priority]
export class PriorityQueue {
 
  constructor()
  {
      this.items = [];
  }

  enqueue(item, priority){
    
    const newElement = new QElement(item, priority)

    let isContain = false;

    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if(element.priority > newElement.priority){
        this.items.splice(index,0,newElement)
        isContain=true
        break
      }
    }

    if(!isContain){
      this.items.push(newElement)
    }
  }

  dequeue(){
    if(this.isEmpty()) return 'Underflow'
    return this.items.shift()
  }

  front(){
    if(this.isEmpty()) return "No elements in Queue"
    return this.items[0]
  }

  rear(){
    if(this.isEmpty()) return "No elements in Queue"
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0
  }

  printPQueue(){
    let str = ''
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      str += element.element + ' '
    }
    return str
  }
}

// // creating object for queue class
// var priorityQueue = new PriorityQueue();
 
// // testing isEmpty and front on an empty queue
// // return true
// console.log(priorityQueue.isEmpty());
 
// // returns "No elements in Queue"
// console.log(priorityQueue.front());
 
// // adding elements to the queue
// priorityQueue.enqueue("Sumit", 2);
// priorityQueue.enqueue("Gourav", 1);
// priorityQueue.enqueue("Piyush", 1);
// priorityQueue.enqueue("Sunny", 2);
// priorityQueue.enqueue("Sheru", 3);
 
// // // prints [Gourav Piyush Sumit Sunny Sheru]
// console.log(priorityQueue.printPQueue());
 
// // // prints Gourav
// console.log(priorityQueue.front().element);
 
// // // prints Sheru
// console.log(priorityQueue.rear().element);
 
// // removes Gouurav
// // priorityQueue contains
// // [Piyush Sumit Sunny Sheru]
// console.log(priorityQueue.dequeue().element);
 
// // Adding another element to the queue
// priorityQueue.enqueue("Sunil", 2);
 
// // prints [Piyush Sumit Sunny Sunil Sheru]
// console.log(priorityQueue.printPQueue());


export class PriorityQueueHeap {
 
  constructor()
  {
      this.heap = new Heap('priority');
  }

  enqueue(item, priority){
    const newElement = {
      item,
      priority
    }
    this.heap.add(newElement)
  }

  dequeue(){
    return this.heap.remove()
  }

  front(){
    return this.heap.peek()
  }

  printPQueue(){
    return this.heap.printHeap()
  }
}

// creating object for queue class
var priorityQueue = new PriorityQueueHeap();
 
console.log('====================================');
// returns "No elements in Queue"
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);
 
// // prints [Gourav Piyush Sumit Sunny Sheru]
console.log(priorityQueue.printPQueue());

// // prints Gourav
console.log(priorityQueue.front());

// removes Gouurav
// priorityQueue contains
// [Piyush Sumit Sunny Sheru]
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

// Adding another element to the queue
priorityQueue.enqueue("Sunil", 2);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
// prints [Piyush Sumit Sunny Sunil Sheru]
console.log(priorityQueue.printPQueue());
console.log('====================================');