//scope practice

const var1 = 1;

function outerFun() {
    const var1 = 2;

    console.log(var1);
    if(true) {
        const var1 = 3;
        console.log(var1);
    }
}

outerFun();

console.log(var1);
