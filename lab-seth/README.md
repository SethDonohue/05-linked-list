# Lab 5 : Linked List

## Seth Donohue

## Functions

### Linkedlist(value)
  This is a basic constructor class that creates a linked list with a value property and a next property.
  Arity: 1, value
  Data Type: numbers only

  ```
  class LinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
  }
  ```


### append(node)
  This is a basic append method that allows us to add a new Linked List to the end of an existing Linked List. If the given node is not an instance of LinkedList then it will throw and error saying so.
  Arity: 1, node
  Data Type: new Linked List nodes only created from the constructor class.

  ```
    append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    (!this.next) ? (this.next = node): this.next.append(node);
    
    return this;
  }
  ```
### find(value)
  This is a basic find method that allows us to search for a given value in the Linked List. If the given node is not an instance of LinkedList then it will throw and error saying so. If the value is not found find will return null.
  Arity: 1, value
  Data Type: number.

  ```

  find(value){
    return (this.value === value) ? this : (!this.next) ? null : this.next.find(value);
  }
```
### remove(node)
  This is a basic remove method that allows us to remove a node of an existing Linked List. If the given node is not an instance of LinkedList then it will throw and error saying so.
  Arity: 1, node
  Data Type: new Linked List nodes only created from the constructor class.

```
  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    (!this.next) ? this: (this === node) ? this.next = this.next.next: (this.next === node) ? this.next = this.next.next: this.next.remove(node);

    return this;
  }
  ```