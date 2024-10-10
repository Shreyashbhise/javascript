// var does not create a new scope for each iteration of the loop, so the same i variable (which ends up being 6 after the loop completes) is shared by all setTimeout callbacks.

function x() {
     for(var i = 1; i <= 5; i++) {
        setTimeout(function () { // we can use let
            console.log(i);
       }, i * 1000); 
    }
     console.log("Hello javascript");
 }
 x();


// function x() { 
//     for(let i = 1; i <=5; i++) {
//         function close(i) { 
//             setTimeout(function () {
//                 console.log(i);
//             }, i * 1000); 
//         } 
//         close(i);
//     }
//     console.log("Hello javascript");

// }
// x();

// u can use an IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration:


// function greet() {
//     for(var i = 1; i <= 5; i++) { 
//         function close(i) {
//           setTimeout(function () {
//             console.log(i);
//            }, i * 1000);
//         }
//         close(i);
//     }
//     console.log("Hello javascript");
// }
// greet();


// function greet() {
//   for(var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     },1*1000);
//   }
//   console.log("Hello Rutuja");

// }
// greet();

// function greet() {
//   for(var i = 1; i<= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       },i*1000);
//     }
//     close(i)
//   }
//   console.log("Hello Rutuja");
// }
// greet();



// function greet() {
//   for(var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     },1 * 1000);
//   }
//   console.log("Hello Nodejs");
// }
// greet();


// function greet() {
//   for(let i =1; i<= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     },1*1000);
//   }
//   console.log("Hello Javascript");

// }
// greet();


function greet() {
  for(var i = 1; i<= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      },i * 1000);
    }
    close(i);
  }
  console.log("Hello Nodejs");
}

greet();
