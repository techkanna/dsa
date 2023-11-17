// TODO 
// 1. create simple hashTable
// 2. handle index collision in hashTable

export class HashTableBasic{
  constructor(){
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key){
    let sum=0
    for (let index = 0; index < key.length; index++) {
      const element = key[index];
      sum+=element.charCodeAt()
    }
    return sum % this.table.length
  }

  set(key, value){
    const index = this._hash(key)
    this.table[index]=[key,value]
    this.size++
  }
  
  get(key){    
    const index = this._hash(key)
    return this.table[index]
  }
  
  remove(key){
    const index = this._hash(key)
    if(this.table[index]){
      this.table[index]=undefined
      this.size--
      return true
    }
    return undefined
  }
}

// const ht = new HashTableBasic();
// ht.set("Canada", 300);
// ht.set("France", 100);
// ht.set("Spain", 110);


// console.log(ht.get("Canada")); // [ 'Canada', 300 ]
// console.log(ht.get("France")); // [ 'France', 100 ]
// console.log(ht.get("Spain")); // [ 'Spain', 110 ]

// console.log(ht.remove("Spain")); // true
// console.log(ht.get("Spain")); // undefined


// const htt = new HashTable();

// htt.set("Spain", 110);
// htt.set("ǻ", 192);

// console.log(htt.get("Spain")); // [ 'ǻ', 192 ]
// console.log(htt.get("ǻ")); // [ 'ǻ', 192 ]

export class HashTable{
  constructor(){
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key){
    let sum=0
    for (let index = 0; index < key.length; index++) {
      const element = key[index];
      sum+=element.charCodeAt()
    }
    return sum % this.table.length
  }

  set(key, value){
    const index = this._hash(key)
    this.size++
    if(!this.table[index]){
      this.table[index]=[[key,value]]
      return
    }

    for (let i = 0; i < this.table[index].length; i++) {
      const element = this.table[index][i];
      if(element[0] === key){
        element[1] = value
        return
      }
    }
    this.table[index].push([key,value])
  }
  
  get(key){    
    const index = this._hash(key)

    if(!this.table[index]) return

    for (let i = 0; i < this.table[index].length; i++) {
      const element = this.table[index][i];
      if(element[0] === key){
        return element
      }
    }
  }

  remove(key){
    const index = this._hash(key)
    
    if(!this.table[index]) return
    this.size--
    
    for (let i = 0; i < this.table[index].length; i++) {
      if(this.table[index][i][0] === key){
        this.table[index].splice(i,1)
        return true
      }
    }
  }

  display(){
    let str=''
    this.table.forEach((item,index)=>{
      if(!item)return''
      str+=`${index}: ${item.map(i=>`[ ${i[0]}: ${i[1]} ]`)} \n`
    })
    console.log(str);
  } 
}


const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
console.log(ht.get("ǻ"));
ht.remove("Spain");
console.log(ht.size); // 2
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]