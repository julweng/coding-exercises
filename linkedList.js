// implement a linked list with insert, retrieve, and removal methods

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

  insert(val, index) {
    if (index < 0 || index > this.length) {
      throw new Error('index error');
    }
    
    const newNode = new Node(val);
    
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let node = this._find(index - 1);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }

  retrieve(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    return this._find(index).val;s 
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let node = this._find(index - 1);
      node.next = node.next.next;
    }
    length--;
  }

  // find by index and get the node
  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
}

const list = new LinkedList();
list.insert(1, 0);
list.insert(4, 1);
list.insert(10, 2);
list.insert(6, 3);
list.insert(2, 4);
list.insert(1, 5);

console.log(list);