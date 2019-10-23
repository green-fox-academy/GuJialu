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

    this.root = this.addNodeFrom(this.root, value);

  }

  private addNodeFrom(node: TreeNode, value: string): TreeNode {

    if (node === null) {
      return new TreeNode(value);
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      node.left = this.addNodeFrom(node.left, value);
      return node;
    } else {
      node.right = this.addNodeFrom(node.right, value);
      return node;
    }

  }

  remove(value: string): void {
    //remove and replace with right's left most
    this.removeNodeFrom(this.root, value);
  }

  private removeNodeFrom(node: TreeNode, value: string): TreeNode {

    if (node === null) {
      return;
    }

    if (node.value === value) {
      if (node.right === null) {

      }
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
//t.remove('2');
console.log(t);
console.log(t.search('2'));

/*
    if (node.value === value) {
      let nodeSecRsLMost: TreeNode = node.right;
      while (nodeSecRsLMost !== null && nodeSecRsLMost.left !== null) {
        nodeSecRsLMost = nodeSecRsLMost.left;
      }
      node.value = nodeSecRsLMost.left.value;
      nodeSecRsLMost = null;
      return;
    } else if (value < node.value) {
      this.removeNodeFrom(node.left, value);
    } else {
      this.removeNodeFrom(node.right, value);
    }
*/