const numbers = [1,2,3,4,5,6,7];
const find = numbers.filter(function(findeven){
    return findeven % 2 == 0;
});
console.log(find);