// // function hoisting

 myfunction();

 function myfunction() {
     console.log("Hello!")
 }

// variable hoisting

 x = 10;
 console.log(x);

 var x;



 mynewfunction();

 function mynewfunction() {
     console.log("Hello");
 }

 x = 10;
 console.log(x);

 var x;


myfunction();
function myfunction() {
    console.log("Namaste Javascript");
}

x = 10;
console.log(x);

var x;



myfunction();
function myfunction() {
    console.log("Namaste javascript");

}

prime();
function prime() {
    console.log("Namaste react");

}

x = 10;
console.log(x);
 
let x;    /// Cannot access 'x' before initialization 


// Arrow function hoisting   /////// Cannot access 'add' before initialization 
add();
const add = ()=> {
    console.log("Hoisting");
}
