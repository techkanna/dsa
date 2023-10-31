function recurciveFibanaci(n) { // Big-O = O(2^n)
 if(n<2)return n
 
 return recurciveFibanaci(n-1)+ recurciveFibanaci(n-2)
}


// console.log(recurciveFibanaci(5))


function recursiveFactorial(n){ // Big-O = O(n)
  if(n===0)return 1
  return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(1));

function linearSearch(arr, target){ // Big-O = O(n)
  for(let i = 0; i<arr.length; i++){
    if(target == arr[i])return i
  }

  return -1
}

// const arr = [-5,2,10,4,6]
// console.log(linearSearch(arr, 10) == 2)
// console.log(linearSearch(arr, 6) == 4)
// console.log(linearSearch(arr, 20) == -1)


function binarySearch(arr, target){ // Big-O = ?
  if(arr.length === 0) return -1

  const centerIndex = Math.ceil(arr.length / 2)
  const centerElement = arr[centerIndex]
  if(centerElement == target) return centerIndex

  let newArr=[];
  if(target > centerElement){
    newArr = arr.slice(centerIndex)
  }else{
    newArr = arr.slice(0,centerIndex)
  }
  
  return binarySearch(newArr, target)
}

// const arr = [-5,2,4,6,10]
// console.log(binarySearch(arr, 10) == 4)
// console.log(binarySearch(arr, 6) == 3)
// console.log(binarySearch(arr, 20) == -1)


function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  const mid = Math.floor((start + end) / 2);

  if (val === arr[mid]) {
    return mid;
  }

  if (start >= end) {
    return -1;
  }

  return val < arr[mid]
    ? binarySearch(arr, val, start, mid - 1)
    : binarySearch(arr, val, mid + 1, end);
}

function binarySearchWhile(arr, val) {
  let start = 0; 
  let end = arr.length - 1;

  while(start <= end){
    const mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) {
      return mid;
    }

    if(val < arr[mid]){
      end=mid-1
    }else{
      start = mid+1
    }
  }

  return -1;
}

// const arr = [4,46,63,73,77,100,523,4352]

// console.log(binarySearchWhile(arr, 73) === 3);
// console.log(binarySearchWhile(arr, 100) === 5);
// console.log(binarySearchWhile(arr, 1000) === -1);
// console.log(binarySearchWhile(arr, 4) === 0);


// stack [last in first out]

class Stack{
  index=0
  itemList={}

  push(item) {
    this.itemList[this.index]=item
    this.index++
  }

  pop(){
    if(this.index === 0) return
    this.index--
    const lastItem = this.itemList[this.index]
    delete this.itemList[this.index]
    return lastItem
  }

  peek(){
    return this.itemList[this.index - 1]
  }

  size(){
    return this.index
  }
}

class StackArray{
  itemList=[]

  push(item) {
    this.itemList.push(item)
  }

  pop(){
    return this.itemList.pop()
  }

  peek(){
    return this.itemList[this.itemList.length - 1]
  }

  size(){
    return this.itemList.length
  }
}

const newList = new StackArray()

// console.log(newList.pop() == undefined);
// newList.push(4);
// console.log(newList.peek() == 4);
// newList.push(5);
// newList.push(10);
// newList.push(40);
// console.log(newList.pop() == 40);
// newList.push(60);
// newList.push(537);
// console.log(newList.peek() == 537);
// console.log(newList.size() == 5);


// queue [firt in first out]

class Queue{
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

class QueueArray{
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
class PriorityQueue {
 
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


// Heap [ min heap - min value will be the first element ]
class Heap{
  constructor(){
    this.heap = []
  }

  getLeftChildIndex(parentIndex){
    return (2 * parentIndex) + 1
  }

  getRightChildIndex(parentIndex){
    return (2 * parentIndex) + 2
  }

  getParentIndex(childIndex){
    return Math.floor((childIndex - 1) / 2)
  }

  hasLeftChild(parentIndex){
    return this.getLeftChildIndex(parentIndex) < this.heap.length;
  }

  hasRightChild(parentIndex){
    return this.getRightChildIndex(parentIndex) < this.heap.length;
  }

  hasParent(childIndex){
    return this.getParentIndex(childIndex) >= 0;
  }

  leftChild(parentIndex){
    return this.heap[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex){
    return this.heap[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex){
    return this.heap[this.getParentIndex(childIndex)]
  }

  swap(indexOne, indexTwo){
    const temp = this.heap[indexOne]
    this.heap[indexOne] = this.heap[indexTwo]
    this.heap[indexTwo] = temp
  }

  peek(){
    if(this.heap.length === 0) return null

    return this.heap[0]
  }

  printHeap(){
    return this.heap
  }

  add(item){
    this.heap.push(item)
    this.heapifyUp()
  }

  remove(){
    if(this.heap.length === 0)return null

    const item = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.heapifiyDown()

    return item
  }

  heapifyUp(){
    let index = this.heap.length - 1
    while(this.hasParent(index) && this.heap[index] < this.parent(index)){
      this.swap(this.getParentIndex(index), index)
      index = this.getParentIndex(index)
    }
  }

  heapifiyDown(){
    let index = 0
    while(this.hasLeftChild(index)){
      let smallerIndex = this.getLeftChildIndex(index)
      if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
        smallerIndex = this.getRightChildIndex(index)
      }

      if(this.heap[index] < this.heap[smallerIndex]){
        break
      }else{
        this.swap(index, smallerIndex)
      }
      index = smallerIndex
    }
  }

}

// Creating the Heap
var heap = new Heap();
 
// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(1593);
heap.add(30);
heap.add(0);
heap.add(40);
heap.add(50);
heap.add(9);
heap.add(100);
heap.add(3040);
heap.add(40);
 
// Printing the Heap
console.log(heap.printHeap());

// Peeking And Removing Top Element
console.log('====================================');
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log(heap.remove());
console.log('====================================');

console.log(heap.printHeap());