interface Tree {
  empty(): boolean;
  add(value: string): void;
  remove(value: string): void;
  search(value: string): boolean
}

class TreeNode {

  left: TreeNode;
  right: TreeNode;
  height: number;
  value: string;

  constructor(value: string) {
    this.left = null;
    this.right = null;
    this.height = 0;
    this.value = value;
  }

}

class myTree implements Tree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  empty(): boolean {
    return this.root === null;
  }

  add(value: string): void {

    if (this.root === null) {
      this.root = new TreeNode(value);
      return;
    }

    this.addNodeFrom(this.root, value);

  }

  private addNodeFrom(node: TreeNode, value: string): void {

    if (value === node.value) {
      return;
    } else if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this.addNodeFrom(node.left, value);
      }
      node.height++;
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this.addNodeFrom(node.right, value);
      }
      node.height++;
    }

  }

  remove(value: string): void {
    //remove and replace with right's left most
    this.removeNodeFrom(this.root, value);
  }

  private removeNodeFrom(node: TreeNode, value: string) {

    if (node === null) {
      return;
    }



  }

  search(value: string): boolean {
    return this.searchNodeFrom(this.root, value);
  }

  private searchNodeFrom(node: TreeNode, value: string) {

    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNodeFrom(node.left, value);
    } else {
      return this.searchNodeFrom(node.right, value);
    }

  }

}

const t: myTree = new myTree();
t.add('3');
t.add('1');
t.add('2');
console.log(t.search('2'));
t.remove('2');
console.log(t);
console.log(t.search('2'));