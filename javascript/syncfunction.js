
function syncfunction() {
    console.log("Start");

    for (let i = 0; i < 1e9; i++) {

    }
    console.log("End");

}
syncfunction();
console.log("This will run after syncfunction is completed !");



function syncfunction() {
    console.log("Hi Rutuja");

    for(let i = 0; i < 1e9; i++) {

    }
    console.log("Bye Rutuja");
}
syncfunction();
console.log("This will run after syncfunction is completed !");


function datafetch() {
    console.log("fetching data");

    for(let i = 0; i < 1e9; i++) {

    }
    console.log("data fetch");
}
console.log("Start");
datafetch();
console.log("End");


function fetched() {
    console.log("data fetching first");

    for(let i =0; i < 1e9; i++) {

    }
    console.log("data feched");
}
console.log("start");
fetched();
console.log("end");