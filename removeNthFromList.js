// Write an algorithm to find the nth element from the end of a 
// linked list without using the .length property and remove it
// Write an algorithm to find the third element from the end of a 
// linked list without using the .length property

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
  }
  
  addToHead(val) {
    const newNode = new Node(val);
    if(this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  remove(val) {
    if (this.head.val === val) {
      this.head = this.head.next;
    } else {
      let node = this.head;
      while (node.next) {
        if (node.next.val === val) {
          node.next = node.next.next;
        } else {
          node = node.next;
        }
      }
    }
  }
}

function getNthFromLast(n, list) {
  let fast = list.head;
  let slow = list.head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.val;
}

function removeNthFromLast(n, list) {
  let nth = getNthFromLast(n, list);
  list.remove(nth);
  return list;
}

// assume 3rd means head -> node 2 -> node 3
function getNthFromList(n, list) {
  if (n === 1) {
    return list.head.val;
  }
  let node = list.head;
  while (n > 1) {
    node = node.next;
    n--;
  }
  return node.val;
}

function removeNthFromList(n, list) {
  let nth = getNthFromList(n, list);
  list.remove(nth);
  return list;
}

const list = new LinkedList();
list.addToHead(1);
list.addToHead(5);
list.addToHead(4);
list.addToHead(7);
list.addToHead(10);
list.addToHead(3);
list.addToHead(6);

console.log(list)
//console.log(removeNthFromLast(3, list))
console.log(removeNthFromList(2, list))

let node = list.head;
while (node) {
  node = node.next;
  console.log(node)
}
