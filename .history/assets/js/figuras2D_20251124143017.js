function NumeroAlAzar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Codigo de developermozilla.org

let a = NumeroAlAzar(2, 10);
let b = NumeroAlAzar(2, 10);
let B = NumeroAlAzar(6, 10);
let c = NumeroAlAzar(2, 10);
let d = NumeroAlAzar(2, 10);
let D = NumeroAlAzar(8, 10);
let h = NumeroAlAzar(5, 10);

const pi = 3.14;

// Triángulo
let PerimetroTriA = a + b + c;
let AreaTria = (b * h) / 2;
document.getElementById("TriAP").innerHTML = "Perímetro: " + a + " + " + b + " + " + c + " = " + PerimetroTriA;
document.getElementById("TriAA").innerHTML = "Área: (" + b + " * " + h + ") / 2 = " + AreaTria;

// Paralelogramo
let Perimetroparalelo = 2 * (a + b);
let Areaparalelo = b * h;
document.getElementById("paraleloP").innerHTML = "Perímetro: 2 * (" + a + " + " + b +") = " + Perimetroparalelo;
document.getElementById("paraleloA").innerHTML = "Área: (" + b + " * " + h + ") = " + Areaparalelo;

// Rectangulo
let PerimetroRectA = 2 * (a + b);
let AreaRectA = b * a;
document.getElementById("RectAP").innerHTML = "Perímetro: 2 * (" + a + " + " + b +") = " + PerimetroRectA;
document.getElementById("RectAA").innerHTML = "Área: (" + b + " * " + a + ") = " + AreaRectA;

// Cuadrado
let Perimetrocua = 4 * a;
let Areacua = a ** 2;
document.getElementById("cuaP").innerHTML = "Perímetro: 4 * " + a + " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = "Área: " + a + "^2 = " + Areacua;

// Cuadrado
let Perimetrorombo = 4 * a;
let Arearombo = (D * d) / 2;
document.getElementById("romboP").innerHTML = "Perímetro: 4 * " + a + " = " + Perimetrorombo;
document.getElementById("romboA").innerHTML = "Área: (" + D + " * " + d + ") / 2 = " + Arearombo;
