function createiterator(array) {
    let index = 0;
    return {
        next: function() {
            if (index < array.length) {
                return {value: array[index++], done:false};

            } else {
                return {value: undefined, done: true};
            }
        }
    };

}

const myarray = [1,2,3];
const iterator = createiterator(myarray);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());