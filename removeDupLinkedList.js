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

  _find (index) {
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
}

function findDup(list) {
  const hash = {};
  const dup = [];
  let node = list.head;
  
  for (let i = 0; i < list.length; i++) {
    hash[node.val] = hash[node.val] + 1 || 1;
    node = node.next;
  }

  for (let item in hash) {
    if (hash[item] >  1) {
      dup.push(parseInt(item));
    }
  }

  return dup;
}

function removeTarget(val, list) {
  let node = list.head;
  let index = 0;

  while (node) {
    if (node.val === val) {
      if (index === 0) {
        list.head = list.head.next;
      } else {
        let prev = list._find(index - 1);
        prev.next = prev.next.next;
      }
      list.length--;
      index--;
    }
    node = node.next;
    index++;
  }
}

function removeDup(list) {
  let dup = findDup(list);

  for (let val of dup) {
    removeTarget(val, list);
  }

  return list;

}

const list = new LinkedList();
list.insert(1, 0);
list.insert(4, 1);
list.insert(10, 2);
list.insert(6, 3);
list.insert(12, 4);
list.insert(1, 5);

console.log(list);
console.log(removeDup(list));
