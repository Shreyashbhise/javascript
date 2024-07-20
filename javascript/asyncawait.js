async function functionname() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetch")
        },1000);
    });

}

async function newfunction() {
    const data = await functionname();
    console.log(data);

}
newfunction();

async function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetch")
        },1000);
    });
}

async function greeting() {
    const data = await greet();
    console.log(data);


}


async function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Data fetch')
        },1000);
    });
}

async function greeting() {
    const data = await greet();
    console.log(data);
}