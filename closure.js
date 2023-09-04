// function x() {
//     var a = 8;
//     console.log("Outer", b);

//     function y() {
//         var b = 10;
//         console.log(a)
//     }
//     y();
//     return y;

// }

// var z = x();

// console.log("a");
//var i = 6;

function a() {
    for(let i = 1; i<=5 ; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000)
    }
    console.log("Helllllo")
}

a();