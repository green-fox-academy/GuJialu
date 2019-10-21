import { Printable } from "./Printable";

export class Domino implements Printable {

  field1: number;
  field2: number;

  printAllFields(): void {
    for (let field in this) {
      console.log(this[field]);
    }
  }

}

let d: Domino = new Domino();
d.field1 = 1;
d.field2 = 2;
d.printAllFields();
