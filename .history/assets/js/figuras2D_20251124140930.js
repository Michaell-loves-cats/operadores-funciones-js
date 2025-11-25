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
let perimetroTri = a + b + c;
let areaTriangulo = (b * h) / 2;
document.getElementById("TriAP").innerHTML = "Perímetro: " + a + " + " + b + " + " + c + " = " ;
document.getElementById("TriAA").innerHTML = ;