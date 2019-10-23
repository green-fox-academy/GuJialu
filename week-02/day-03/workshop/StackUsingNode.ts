import { myNode } from "./LinkedList";
import { Stack } from "./StackAndQueue";

class StackUsingNode implements Stack {

  head: myNode
  constructor() {
    this.head = null;
  }

  empty(): boolean {
    return this.head === null;
  }

  peek(): string {
    return this.head.value;
  }

  push(value: string): void {
    let n: myNode = new myNode(value);
    if (this.head === null) {
      this.head = n;
    } else {
      n.next = this.head;
      this.head = n;
    }
  }

  pop(): string {
    if (this.head === null) {
      return null;
    }

    let n: myNode = this.head;
    let nPrev: myNode = null;
    while (n.next !== null) {
      nPrev = n;
      n = n.next;
    }

    //if removing node of index 0
    if (nPrev === null) {
      this.head = null;
    } else {
      nPrev.next = null;
    }

    return n.value;

  }

}

const stackUsingNode: StackUsingNode = new StackUsingNode();
