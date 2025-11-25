function NumeroAlAzar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Codigo de developermozilla.org

let a = NumeroAlAzar(1, 10);
let b = NumeroAlAzar(1, 10);
let B = NumeroAlAzar(1, 10);
let c = NumeroAlAzar(1, 10);
let d = NumeroAlAzar(1, 10);
let D = NumeroAlAzar(1, 10);
let h = NumeroAlAzar(1, 10);

const pi = 3.14;

// Triángulo
let PerimetroTriA = a + b + c;
let AreaTria = (b * h) / 2;
document.getElementById("TriAP").innerHTML = "Perímetro: " + a + " + " + b + " + " + c + " = " + PerimetroTriA;
document.getElementById("TriAA").innerHTML = "Área: (" + b + " * " + h + ") / 2 = " + AreaTria;

// Paralelogramo
let Perimetroparalelo = 2 * (a + b);
let Areaparalelo = b * h;
document.getElementById("paraleloP").innerHTML = "Perímetro: 2 * (" + a + " + " + b +") = " + PerimetroTriA;
document.getElementById("paraleloA").innerHTML = "Área: (" + b + " * " + h + ") / 2 = " + AreaTria;

// Rectangulo
let PerimetroRectA = 2 * (a + b);
let Areaparalelo = b * h;
document.getElementById("RectAP").innerHTML = "Perímetro: 2 * (" + a + " + " + b +") = " + PerimetroTriA;
document.getElementById("RectAA").innerHTML = "Área: (" + b + " * " + h + ") / 2 = " + AreaTria;
