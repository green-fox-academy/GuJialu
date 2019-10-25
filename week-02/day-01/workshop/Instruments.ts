'use strict';

export abstract class Instrument {

  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): void;

}

export abstract class StingedInstrument extends Instrument {

  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  play(): void {
    this.sound();
  }
  abstract sound(): void;

}

export class ElectricGuitar extends StingedInstrument {
  constructor(numberOfString = 6) {
    super('Electric Guitar', numberOfString);
  }

  sound(): void {
    console.log('Twang');
  }
}

let e: ElectricGuitar = new ElectricGuitar();


export class BassGuitar extends StingedInstrument {
  constructor(numberOfString = 4) {
    super('Bass Guitar', numberOfString);
  }

  sound(): void {
    console.log('Duum-duum-duum');
  }
}

export class Violin extends StingedInstrument {
  constructor(numberOfString = 4) {
    super('Violin', numberOfString);
  }

  sound(): void {
    console.log('Screech');
  }
}
