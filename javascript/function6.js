// // claculate the area of rectangle

// let length = 5;
// let breadth = 10;
// let area = length * breadth;
// console.log("The area of reactangle is :" + area);

// // claulate the are of rectangle 2

// let length2 = 5;
// let breadth3 = 10;
// let area1 = length * breadth;
// console.log("The area of reactangle is :" + area1);



// assign function to the variable

const myVariable = function() {
    console.log("Inside the function");

}

myVariable();


// pass function as an argument

function wishHappyBirthday() {
    return "Happy Birthday";


}

function wishPerson(wishmessage,name) {
    console.log(wishmessage(), name);

}

wishPerson(wishHappyBirthday, "sakshi ...");

function sayHello() {
    return function() {
        console.log("Hii sakshi ..");

    }
}

const newfun2 = sayHello();
newfun2();