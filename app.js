let coppers = 0;
let copperGrowth = 1;
myTimer = setInterval(endOfTurnCalc, 100);

function endOfTurnCalc() {
    coppers = Math.round(coppers + copperGrowth / 10).toPrecision(2);
    document.getElementById("spnCopperValue").innerHTML = coppers;
}