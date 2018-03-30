// You are given two non-empty linked lists representing two non-negative 
// integers. The most significant digit comes first and each of their 
// nodes contain a single digit. Add the two numbers and return it as 
// a linked list.

// You may assume the two numbers do not contain any leading zero, 
// except the number 0 itself.

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

  _find(index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index error');
    }
    return this._find(index).val;
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
    this.length--;
  }
}

function addDigit(list1, list2) {
  let result = new LinkedList();
  let carry = 0;
  let sum = 0;
  let lastIndex1 = list1.length - 1;
  let lastIndex2 = list2.length - 1;
  
  
  while (lastIndex1 >= 0 || lastIndex2 >= 0 || carry === 1) {
    if (lastIndex1 >= 0) {
      sum += list1.get(lastIndex1);
      lastIndex1--;
    }
    
    if (lastIndex2 >= 0) {
      sum += list2.get(lastIndex2);
      lastIndex2--;
    }
    
    sum += carry;
    carry = 0;
    
    if (sum >= 10) {
      result.insert(sum % 10, 0);
      carry++;
    } else {
      result.insert(sum, 0);
    }
    sum = 0;
  }
  
  return result;
}

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.insert(1, 0);
list1.insert(4, 1);
list1.insert(7, 2);
list1.insert(6, 3);
list2.insert(8, 0);
list2.insert(1, 1);

let result = addDigit(list1, list2);
for (let i=0; i < result.length; i++) {
  console.log(result.get(i));
}