interface LinkedList {
  add(value: string, index?: number): void;
  get(index: number): string;
  removeItem(value: string): void;
  remove(index: number): string;
  size(): number;
}

class myNode {

  value: string
  next: myNode

  constructor(value: string) {
    this.value = value;
    this.next = null;
  }

}

class myLinkedList implements LinkedList {

  head: myNode

  constructor() {
    this.head = null;
  }

  add(value: string, index?: number): void {

    let n:myNode = new myNode(value);
    if (this.head === null) {
      this.head = n;
    }else{
      n.next = this.head;
      this.head = n;
    }

  }

  get(index: number): string {

    let n: myNode = this.head;

    if (n === null) {
      return undefined;
    }

    for (let i = 0; i < index; i++) {
      n = n.next;
      if (n === null) {
        return undefined;
      }
    }

    return n.value;

  }

  removeItem(value: string): void {

    let n: myNode = this.head;
    let nPrev: myNode = null;

    if (n === null) {
      return undefined;
    }

    while (n !== null) {

      if (n.value === value) {
        //if removing node of index 0
        if (nPrev === null) {
          this.head = n.next;
        }else{
          nPrev.next = n.next;
        }
        return;
      }

      nPrev = n;
      n = n.next;

    }//while

  }

  remove(index: number): string {

    let n: myNode = this.head;
    let nPrev: myNode = null;

    if (n === null) {
      return undefined;
    }

    for (let i = 0; i < index; i++) {
      nPrev = n;
      n = n.next;
      if (n === null) {
        return undefined;
      }
    }

    //if removing node of index 0
    if (nPrev === null) {
      this.head = n.next;
    }else{
      nPrev.next = n.next;
    }

  }

  size(): number {
    let n: myNode = this.head;
    let i:number = 0;
    while(n!==null){
      n = n.next;
      i++;
    }
    return i;
  }

}

const li: myLinkedList = new myLinkedList();
li.add('aa');
li.add('bb');
li.add('cc');
console.log(li);
li.remove(0);
console.log(li.size());
console.log(li);
