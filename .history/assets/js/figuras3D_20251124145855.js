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
let Volumencono = 
document.getElementById("conoP").innerHTML = " = " + Perimetrocono;
document.getElementById("conoA").innerHTML = " = " + Areacono;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Paralelep
let Perimetroparalele = a;
let Areaparalele = a;
document.getElementById("paraleleP").innerHTML = " = " + Perimetroparalele;
document.getElementById("paraleleA").innerHTML = " = " + Areaparalele;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Cuadrado
let Perimetrocua = a;
let Areacua = a;
document.getElementById("cuaP").innerHTML = " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = " = " + Areacua;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Círculo
let Perimetrocir = a;
let Areacir = a;
document.getElementById("cirP").innerHTML = " = " + Perimetrocir;
document.getElementById("cirA").innerHTML = " = " + Areacir;
document.getElementById("conoV").innerHTML = " = " + Areacono;


