function* generatesequence() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatesequence();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());