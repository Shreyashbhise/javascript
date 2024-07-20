function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve("Data froom step 1");
        },1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Step 2 complete");
            resolve("Data from step 2");
        },1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            resolve("Data from step 3");
        },1000);
    });
}

step1()
    .then((res) => {
        console.log("receive :",res);
        return step2(res);

    })
    .then((res) => {
        console.log("receive :",res);
        return step3(res);
    })
    .then((res) => {
        console.log('Received:', res);
        console.log('All steps complete');
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step1 is completed");
            resolve("Data from step1");
        },1000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2 is completed");
            resolve("Data from step2");
        },1000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step3 is completed");
            resolve("Data from step3");
        },1000);
    });
}

step1()
    .then((res) => {
        console.log("receive:",res);
        return step2(res);
    })
    .then((res) => {
        console.log("receive:",res);
        return step3(res);
    })
    .then((res) => {
        console.log("receive:",res);
        console.log("All step is completed");
    })
    .catch((error) => {
        console.log("error:",error);
    });