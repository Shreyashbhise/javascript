function a() {
    var b =10;
    c();
    function c() { 
        console.log(b);

    }
}

a();


function abc() {
    var a = 5;

    function xyz() {
        console.log(a);
    }
    xyz();
}

abc();

// This wiil not work 

function abc() {
    console.log(a)

    function xyz() {
        var a = 5;
    }
    xyz()
}

abc();