function step1(callback) {

    setTimeout(() => {
        console.log("step 1 is completed .");
        callback();
    },1000);
}

function step2(callback) {

    setTimeout(() => {
        console.log("step 2 is completed .");
        callback();
    },1000);
}
function step3(callback) {

    setTimeout(() => {
        console.log("step 3 is completed .");
        callback();
    },1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All step is completed");

        });
    });

});

function step1(callback) {
    setTimeout(() => {
        console.log("step 1 is completed .");
        callback();
    },1000);
}

function step2(callback) {
    setTimeout(()=> {
        console.log("step 2 is completed .");
        callback();
    },1000);
}

function step3(callback) {
    setTimeout(()=> {
        console.log("step 3 is completed .");
        callback();
    },1000);
}

step1(()=> {
    step2(()=> {
        step3(()=> {
            console.log("All step is completed");
        });
    });
});

                  
function step1(callback) {
    setTimeout(() => {
        console.log("step 1 is completed");
        callback();
    },1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("step 2 is completed");
        callback();
    },1000);

}

function step3(callback) {
    setTimeout(() => {
        console.log("step 3 is completed");
        callback();
    },1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log('All step is completed');
        });
    });
});