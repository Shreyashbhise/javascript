// function varaibleMethod() {
//     let name = "Rutuja";
//     if(true) {
//         let age = 23;   // only accessible within this block
//         console.log(name);
//         console.log(age);
//     }
//    // console.log(age);
// }
// varaibleMethod()

// function letblock() {
//     let name = "Rutuja";
//     if(true) {
//         let age = 23;
//         console.log(name);
//         console.log(age);
//     }
//      console.log(age);

// } letblock();



// Since name is declared in the outer function scope, it is accessible within the nested if block, but age is only accessible within the if block itself.


function prime() {
    let name = "Rutuja..";
    name = "Sakshi ...";
    if(true) {
        let age = 23;
        console.log(name);
        console.log(age);
    }
  
}
prime();