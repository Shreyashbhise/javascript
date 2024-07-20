let mypromise = new Promise((resolve, reject) => {
    let success = false;

    if(success) {
        resolve("Operation successfull !");
    }else {
        reject("Operation failled !");
    }
});
mypromise
.then((result) => {
    console.log("Success :", result);
})
.catch((error) => {
    console.log("Error",error)
});