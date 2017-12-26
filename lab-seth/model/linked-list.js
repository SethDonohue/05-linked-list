'use strict';

class LinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    (!this.next) ? (this.next = node): this.next.append(node);
    
    return this;
  }


  find(value){
    return (this.value === value) ? this : (!this.next) ? null : this.next.find(value);
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');
    
    (!this.next) ? this: (this === node) ? this.next = this.next.next: (this.next === node) ? this.next = this.next.next: this.next.remove(node);

    return this;
  }
}

module.exports = LinkedList;