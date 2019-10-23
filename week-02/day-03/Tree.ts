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

    this.addNodeFrom(this.root, value);

  }

  private addNodeFrom(node: TreeNode, value: string): void {

    if (node === null) {
      node = new TreeNode(value);
      return;
    }

    if (value === node.value) {
      return;
    } else if (value < node.value) {
      this.addNodeFrom(node.left, value);
      node.height++;
    }else{
      this.addNodeFrom(node.right, value);
      node.height++;
    }

  }

  remove(value: string): void {
    //remove and replace with right's left most
    this.removeNodeFrom(this.root, value);
  }

  private removeNodeFrom(node: TreeNode, value: string){

    if(node===null){
      return;
    }

    if(node.value === value){
      let nodeRsLMost: TreeNode = node.right;
      while(nodeRsLMost!==null){
        nodeRsLMost = nodeRsLMost.left;
      }
      node = nodeRsLMost;
      nodeRsLMost = null;
      return;
    }else if(node.value< value){
      this.removeNodeFrom(node.left, value);
    }else{
      this.removeNodeFrom(node.right, value);
    }

  }

  search(value: string): boolean {
    throw new Error("Method not implemented.");
  }

  

}