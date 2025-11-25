function NumeroAlAzar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Codigo de developermozilla.org

let a = NumeroAlAzar(10, 50);
let b = NumeroAlAzar(10, 50);
let h = NumeroAlAzar(10, 50);
let r = NumeroAlAzar(10, 50);

const π = 3.14;

// Cono
let Perimetrocono = a;
let Areacono = a;
let Volumencono = a;
document.getElementById("conoP").innerHTML = " = " + Perimetrocono;
document.getElementById("conoA").innerHTML = " = " + Areacono;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Paralelepípedo
let Perimetroparalele = a;
let Areaparalele = a;
let Volumenparalele = a;
document.getElementById("paraleleP").innerHTML = " = " + Perimetroparalele;
document.getElementById("paraleleA").innerHTML = " = " + Areaparalele;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Cubo
let Perimetrocua = a;
let Areacua = a;
let Volumencono = a;
document.getElementById("cuaP").innerHTML = " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = " = " + Areacua;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Esfera
let Perimetrocir = a;
let Areacir = a;
let Volumencono = a;
document.getElementById("cirP").innerHTML = " = " + Perimetrocir;
document.getElementById("cirA").innerHTML = " = " + Areacir;
document.getElementById("conoV").innerHTML = " = " + Areacono;


