function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

/**
 * adding a new node to the head
 */
LinkedList.prototype.addToHead = function (value) {
  let headNode = new Node(value, this.head, null);
  //if the linked list is currently empty
  if (!this.head) {
    this.tail = headNode
  } else {
    headNode.next = this.head;
    this.head.previous = headNode

  }
  this.head = headNode
}

LinkedList.prototype.addToTail = function (value){
  let tailNode = new Node(value, null, this.tail)
  if(!this.head){
    this.head = tailNode;
  } else{
    this.tail.next = tailNode
    tailNode.previous = this.tail
  }
  this.tail = tailNode;
}

LinkedList.prototype.removeHead = function () {
  //check if the list is empty and return null
  //record the value because that's what we will return
  //assign this head in the linked list to current next {{100}, {200}}
  //check if list has only one item; if yes - tail = null
  if (!this.head) {
    return null;
  }
  const headValue = this.head.value;
  this.head = this.head.next;
  if (!this.head){
    this.tail = null
  }
  this.head.previous = null; // if your list is doubly linked
  return  headValue
}

LinkedList.prototype.removeTail = function () {
  //check if the linked list is empty
  //record the value
  //point the tail to the previous node {300, 200}
  //if new tail is now null -> set the head to null
  if (!this.tail) {
    return null;
  }
  const tailReturnValue = this.tail.value;
  this.tail = this.tail.previous //new tail
  if (!this.tail){
    this.head = null;
  }
  this.tail.next = null
  return tailReturnValue;

}

const ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToTail(300);

ll.removeTail()
console.log(ll.removeTail())
