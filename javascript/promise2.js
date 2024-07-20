let promise = new Promise((resolve, reject) => {
    let success = true;

    if(success) {
        resolve("Operation successful");
    } else {
        reject("operation failled");
    }
});

promise 
     .then((result) => {
        console.log(result);
     })
     .catch((error) => {
        console.log(error);
     });



let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Operation successfull");
    }else {
        reject("Operation failled");
    }
});

promise
     .then((result) => {
        console.log(result);
     })
     .catch((error) => {
        console.log(error);
     });


let promise2 = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Operation successfull");
    }else {
        reject("Operation failled");
    }
});

promise2
   .then((result) => {
    console.log(result);
   })
   .catch((error) => {
    console.log(error);
   });