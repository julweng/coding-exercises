// Write an algorithm to find the third element from the end of a 
// linked list without using the .length property

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {   
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  
  remove(index) {
    let removed;
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      const prev = this._find(index - 1);
      removed = prev.next;
      prev.next = prev.next.next;
    }
    this.length--;
    return removed.val;
  }
}

function reverseLinkedList(list){
  let removed;
  for (let i = 0; i < list.length; i++) {
    removed = list.remove(i);
    list.addToHead(removed);
  }
  return list;
}

const list = new LinkedList();
list.addToHead(5);
list.addToHead(7);
list.addToHead(4);
list.addToHead(9);
list.addToHead(8);
list.addToHead(2);
console.log(list);
console.log(reverseLinkedList(list));