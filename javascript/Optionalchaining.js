let user = {
    name: "Alice",
    addrress: {
        street: "123 Main st",
        city: "Wonderland"
    }
};

let street = user?.addrress?.street;
console.log(street);

