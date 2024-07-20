
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    getdetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    greet() {
        return `Hello ${this.name}, I love you`
    }
}

let person1 = new Person("Rutuja",23)
let person2 = new Person("Rutuja")
console.log(person1.getdetails());
console.log(person1.greet());


