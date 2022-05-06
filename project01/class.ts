class Animal {
    readonly name: string;
    static categoies: string[] = ['mammal', 'bird'];
    constructor(name: string) {
        this.name = name
    }

    run () {
        return `${this.name} is running`
    }
}

console.log(Animal.categoies);
const snake = new Animal('lily')
console.log(snake.run())
// snake.name = 'lucy'
console.log(snake.name)

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xx')
console.log(xiaobao.bark())


class Cat extends Animal {
    constructor(name: string) {
        super(name)
        console.log(this.name)
    }
    run() {
        return `Meow, ` + super.run()
    }
}

const maomao = new Cat('MAOMAO');
console.log(maomao.run())


interface Radio {
    switchRadio(tiggerL: boolean): void; 
}

interface Battery {
    checkBatteryStatus();
}

interface RadioWithBattery extends Radio {
    checkBatteryStatus();
}
class Car implements Radio {
    switchRadio() {

    }
}

class CellPhone implements RadioWithBattery {
    switchRadio() {

    }
    checkBatteryStatus() {

    }
}