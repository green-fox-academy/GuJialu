import { Printable } from "./Printable";

export class ToDo implements Printable {

  field1: number;
  field2: number;

  printAllFields(): void {
    for (let field in this) {
      console.log(this[field]);
    }
  }

}
