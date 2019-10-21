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

export class Bird extends Animal {
    constructor(name: string) {
        super(name);
    }

    breed(): string {
        return 'laying eggs.';
    }
}
