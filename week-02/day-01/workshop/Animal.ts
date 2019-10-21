import { Flyable } from "./Flyable";

export abstract class Animal {
    protected name: string;
    protected age: number;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract breed(): string;
}

export class Mammal extends Animal {
    constructor(name: string) {
        super(name);
    }

    breed(): string {
        return 'pushing miniature versions out.';
    }
}

export class Reptile extends Animal {
    constructor(name: string) {
        super(name);
    }

    breed(): string {
        return 'laying eggs.';
    }
}

export class Bird extends Animal implements Flyable {
    land(): void {
        console.log('land');
    }
    fly(): void {
        console.log('fly');
    }
    takeOff(): void {
        console.log('take off');
    }
    constructor(name: string) {
        super(name);
    }

    breed(): string {
        return 'laying eggs.';
    }
}
