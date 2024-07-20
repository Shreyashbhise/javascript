function asyncfunction (callback) {
    console.log("Start");


    setTimeout (() => {
        console.log("Asyncfumction completed !");
        callback();
        

    }, 2000);
    
}

 asyncfunction(() => {
    console.log("This function wiil run after asyncfunction is completed");
}); 

console.log("This function will run before asyncfunction is completed ");

function asyncfunction(callback) {
    console.log("Hii Rutuja");

    setTimeout(() => {
        console.log("Rutuja accepeted !");
        callback();
    },1000);
}

asyncfunction(() => {
    console.log("This function will run after rutuja accepted !");
});

console.log("This function is run before rutuja accepted!");

