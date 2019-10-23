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
    this.root = this.removeNodeFrom(this.root, value);
  }

  private removeNodeFrom(node: TreeNode, value: string): TreeNode {

    //nothing to remove
    if (node === null) {
      return node;
    }

    if (node.value === value) {
      if (node.right === null && node.left === null) {
        //no child case
        return null;
      } else if (node.right === null) {
        //no right child case
        return node.left;
      } else if (node.left === null) {
        //no left child case
        return node.right;
      } else {
        //two children case
        let nodeNextInOrder: TreeNode = node.right;
        while (nodeNextInOrder.left !== null) {
          nodeNextInOrder = nodeNextInOrder.left;
        }
        let tempValue: string = nodeNextInOrder.value;
        node = this.removeNodeFrom(node, tempValue);
        node.value = tempValue;
        return node;
      }
    } else if (value < node.value) {
      node.left = this.removeNodeFrom(node.left, value);
      return node;
    } else {
      node.right = this.removeNodeFrom(node.right, value);
      return node;
    }

  }

  search(value: string): boolean {
    return this.searchNodeFrom(this.root, value);
  }

  private searchNodeFrom(node: TreeNode, value: string): boolean {

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
t.add('4');
t.add('8');
t.add('7');
t.add('2');
t.add('5');
t.add('6');
console.log(t.search('4'));
t.remove('4');
console.log(t);
console.log(t.search('4'));
