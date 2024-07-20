// High order function that return another function


function multiplication(multiplay) {

    return function(number) {
        return multiplay * number;
    };
}

const one = multiplication(3);
const two = multiplication(4);

console.log(one(2));
console.log(two(3));