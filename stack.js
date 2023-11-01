// stack [last in first out]

export class Stack{
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


export class StackArray{
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

