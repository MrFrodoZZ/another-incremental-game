let coppers = 0;
let copperGrowth = 1;
myTimer = setInterval(endOfTurnCalc, 100);

function endOfTurnCalc() {
    coppers = coppers + copperGrowth / 10;
    document.getElementById("spnCopperValue").innerHTML = coppers;
}