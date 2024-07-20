function greet() {
    let person = Prompt("Please enter your name :");

if (person) {
    return `Hello ${person}`;
}else {
    return "Hello !";
}
}

let greeting = greet();
console.log(greeting);


