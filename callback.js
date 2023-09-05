//callback function

// function buttonEventListener() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//         console.log("Button clicked", ++count);
//     })
// }

// buttonEventListener()


function getCheese(funcParam){
    setTimeout(() => {
        const cheese = '🍰';
        console.log("here is cheese", cheese);
        funcParam(cheese);
    }, 3000);
}

getCheese((var1)=> {
    console.log("function getCheese", var1);
})

