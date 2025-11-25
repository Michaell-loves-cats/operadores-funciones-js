function NumeroAlAzar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Codigo de developermozilla.org

let a = NumeroAlAzar(10, 50);
let b = NumeroAlAzar(10, 50);
let h = NumeroAlAzar(10, 50);
let g = NumeroAlAzar(10, 50);
let r = NumeroAlAzar(10, 50);

const π = 3.14;

// Cono
let Areacono = π * r * (r + g);
let Volumencono = (1/3) * π * (r ** 2) * h;
document.getElementById("conoA").innerHTML = π + " * " + r + " * (" + r + " + " + g + ")" + " = " + Areacono;
document.getElementById("conoV").innerHTML = "(1/3) * π * (" + r + "^2) * " + h + " = " + Areacono;

// Paralelepípedo
let Areaparalele = 2 * ((a * b) + (b * c) + (a * c));
let Volumenparalele = a * b * h;
document.getElementById("paraleleA").innerHTML = "2 * ((" + a + " * " + b + ") + (b * c) + (a * c)) " = " + Areaparalele;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Cubo
let Areacubo = a;
let Volumencubo = a;
document.getElementById("cuboA").innerHTML = " = " + Areacubo;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Esfera
let AreaEsfera = a;
let VolumenEsfera = a;
document.getElementById("EsferaA").innerHTML = " = " + AreaEsfera;
document.getElementById("EsferaV").innerHTML = " = " + Areacono;