export interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

export class myStack implements Stack {

  stack: string[];

  empty(): boolean {
    return this.stack.length === 0;
  }
  peek(): string {
    return this.stack[this.stack.length - 1];
  }
  push(value: string): void {
    this.stack.push(value);
  }
  pop(): string {
    return this.stack.pop();
  }

}

export interface Queue {
  empty(): boolean;
  peek(): string;
  add(value: string): void;
  remove(): string;
}

class myQueue implements Queue {

  queue: string[]

  empty(): boolean {
    return this.queue.length === 0;
  }
  peek(): string {
    return this.queue[this.queue.length - 1];
  }
  add(value: string): void {
    this.queue.push(value);
  }
  remove(): string {
    return this.queue.shift();
  }

}