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
document.getElementById("conoP").innerHTML = " = " + Perimetrocono;
document.getElementById("conoA").innerHTML = " = " + Areacono;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Paralelep
let Perimetroparalelo = a;
let Areaparalelo = a;
document.getElementById("paraleloP").innerHTML = " = " + Perimetroparalelo;
document.getElementById("paraleloA").innerHTML = " = " + Areaparalelo;

// Cuadrado
let Perimetrocua = 4 * a;
let Areacua = a ** 2;
document.getElementById("cuaP").innerHTML = " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = " = " + Areacua;

// Círculo
let Perimetrocir = 2 * π * r;
let Areacir = π * r^2;
document.getElementById("cirP").innerHTML = " = " + Perimetrocir;
document.getElementById("cirA").innerHTML = "π * " + r + "^2 = " + Areacir;


