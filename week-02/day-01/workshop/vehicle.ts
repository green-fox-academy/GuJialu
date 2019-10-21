import { Flyable } from "./Flyable";

export abstract class Vehicle {
  protected name: string;
  protected fuel: number;
  protected speed: number;

  constructor(name: string, fuel: number, speed: number) {
    this.name = name;
    this.fuel = fuel;
    this.speed = speed;
  }
}

export class Helicopter extends Vehicle implements Flyable{
  land(): void {
    console.log('land');
  }
  fly(): void {
    console.log('fly');
  }
  takeOff(): void {
    console.log('take off');
  }
}