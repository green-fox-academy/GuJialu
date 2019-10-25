import { Queue, myStack } from "./StackAndQueue";

class TwoStacksQueue implements Queue {

  stack1: myStack;
  stack2: myStack;

  empty(): boolean {
    return this.stack1.empty();
  }
  peek(): string {
    return this.stack1.peek();
  }
  add(value: string): void {
    this.stack1.push(value);
  }
  remove(): string {
    let out;
    while (!this.stack1.empty) {
      this.stack2.push(this.stack1.pop());
    }
    out = this.stack2.pop();
    while (!this.stack2.empty) {
      this.stack1.push(this.stack2.pop());
    }
    return out;
  }

}
