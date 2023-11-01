// Heap [ min heap - min value will be the first element ]
export class Heap{
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