

class Person {
    constructor(name) {
        this.name = name;
    }

    greetings = () => {
        console.log(`my name is ${this.name}`);
    }

    age = age => {
        console.log(`my age is ${age} years old`);
    }
}

const mawar = new Person("mawar")

console.log(mawar.greetings());
console.log(mawar.age(23));


class People extends Person {

    constructor(name, address) {
        super(name);
        this.address = address;
    }

    greetings = () => {
        console.log(
            `hello, my name is ${this.name} and i live in ${this.address}`
        )
    }
}

const people = new People("sarah", "jakarta")
console.log(people.greetings());




