function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 1 is completed");
            resolve();
        },1000)
    })
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 2 is completed");
            resolve();
        },1000)
    })
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step 3 is completed");
            resolve();
        },1000)
    })
}

// promises

step1()
.then(() => step2())
.then(() => step3())
.then(() => {
    console.log("All step is completed");
});

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 is completed");
            resolve();
        },1000)
    })
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2 is completed");
            resolve();
        },1000)
    })
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step3 is completed");
            resolve();
        },1000)
    })
}

step1()
.then(() => step2())
.then(() => step3())
.then(() => {
    console.log("All step is completed")
});


function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step1 is completed");
            resolve();
        },1000)
    })
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step2 is completed");
            resolve();
        },1000)
    })
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step3 is completed");
            resolve();
        },1000)
    })
}

step1()
.then(() => step2())
.then(() => step3())
.then(() => {
    console.log("All the step is completed");
});