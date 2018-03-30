// Write an algorithm to find the middle element of a linked list 
// without using the .length property

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}

function mid(list) {
  let slow = list.head;
  let fast = list.head;
  
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const list = new LinkedList();
list.addToHead(5);
list.addToHead(7);
list.addToHead(4);
list.addToHead(9);
list.addToHead(2);
console.log(list);
console.log(mid(list));