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
let PerimetroTriA = a + b + c;
let AreaTria = (b * h) / 2;
document.getElementById("TriAP").innerHTML = a + " + " + b + " + " + c + " = " + PerimetroTriA;
document.getElementById("TriAA").innerHTML = "(" + b + " * " + h + ") / 2 = " + AreaTria;

// Paralelogramo
let Perimetroparalelo = 2 * (a + b);
let Areaparalelo = b * h;
document.getElementById("paraleloP").innerHTML = "2 * (" + a + " + " + b +") = " + Perimetroparalelo;
document.getElementById("paraleloA").innerHTML = "(" + b + " * " + h + ") = " + Areaparalelo;

// Cuadrado
let Perimetrocua = 4 * a;
let Areacua = a ** 2;
document.getElementById("cuaP").innerHTML = "4 * " + a + " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = a + "^2 = " + Areacua;

// Círculo
let Perimetrocir = 2 * π * r;
let Areacir = π * r^2;
document.getElementById("cirP").innerHTML = "2 * π * " + r + " = " + Perimetrocir;
document.getElementById("cirA").innerHTML = "π * " + r + "^2 = " + Areacir;


