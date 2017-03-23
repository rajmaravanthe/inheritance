class animal {
    name: string;
    distance: number;
    sound: string;
    constructor (name: string) {
        this.name = name;
    }
    move (distance: number) {
        this.distance = distance;
        return `${this.name} moved distance of ${this.distance} km`;
    }
    makeSound (sound: string) {
        this.sound = sound;
        return `made sound ${this.sound}`;
    }
}

class tiger extends animal {
    constructor (name: string) {
        super(name);
    }
}

class elephant extends animal {
    constructor (name: string) {
        super(name);
    }
}

var Tiger = new tiger('Tiger');
var Elephant = new elephant('Elephant');

document.write(`${Tiger.move(12)} and ${Tiger.makeSound('gurrrrrrrr')}, `);
document.write(`${Elephant.move(2)} and ${Elephant.makeSound('Ummmmaaah')}`);