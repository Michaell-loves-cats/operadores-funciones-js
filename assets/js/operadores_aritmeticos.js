/**
 * Operadores aritméticos
 */
let numa = 8, numb = 4;
let res1, res2, res3, res4;

// Suma
res1 = numa + numb;

// Resta
res2 = numa - numb;

// Multiplicación
res3 = numa * numb;

// División
res4 = numa / numb;

document.getElementById("demo").innerHTML = 
"Número a: " + numa + " Número b: " + numb + "<br>" +
"Suma: " + numa + " + " + numb + " = " + res1 + "<br>" +
"Resta: "  + numa + " - " + numb + " = " + res2 + "<br>" +
"Multiplicación: "  + numa + " * " + numb + " = " + res3 + "<br>" +
"División: "  + numa + " / " + numb + " = " + res4;