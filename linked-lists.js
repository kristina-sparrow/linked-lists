// node factory function
function createNode(value = null, next = null) {
  return { value, next };
}

// linked list module
const linkedList = () => {
  let head = null;
  let tail = null;
  let length = 0;

  //add a new node containing value to the end of the list
  function append(value) {
    let newNode = createNode(value);
    length++;
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  //add a new node containing value to start of list
  function prepend(value) {
    let newNode = createNode(value, head);
    length++;
    if (head === null) tail = newNode;
    head = newNode;
  }

  //returns total number of nodes in list
  function size() {
    return length;
  }

  //returns first node in list
  function findHead() {
    return head;
  }

  //returns last node in list
  function findTail() {
    return tail;
  }

  //returns the node at the given index
  function at(index) {
    let maxIndex = length - 1;
    if (head === null) return null;
    if (index > maxIndex)
      return `Error, out of range. Max index is ${maxIndex}.`;
    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  //removes the last element from the list
  function pop() {
    if (head === null) return null;
    let current = head;
    if (current.next === null) {
      head = null;
      tail = null;
    } else {
      while (current.next !== null && current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      tail = current;
    }
    length--;
  }

  //returns true if the passed in value is in the list and otherwise returns false
  function contains(v) {
    if (head === null) return null;
    let current = head;
    while (current.next !== null) {
      if (current.value === v) return true;
      current = current.next;
    }
    return current.value === v ? true : false;
  }

  //returns the index of the node containing value, or null if not found
  function find(v) {
    if (head === null) return null;
    let index = 0;
    let current = head;
    while (current.next !== null) {
      if (current.value === v) return index;
      current = current.next;
      index++;
    }
    return current.value === v ? index : null;
  }

  //represents linkedlist objects as strings to print out and preview in the console
  //( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    let current = head;
    let result = "";
    while (current !== null) {
      result += `( ${current.value} ) --> `;
      current = current.next;
    }
    return result + "null";
  }

  return {
    append,
    prepend,
    size,
    findHead,
    findTail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const list = linkedList();
