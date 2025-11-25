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

// Triángulo
let PerimetroTriA = a + b + c;
let AreaTria = (b * h) / 2;
document.getElementById("TriAP").innerHTML = a + " + " + b + " + " + c + " = " + PerimetroTriA;
document.getElementById("TriAA").innerHTML = "(" + b + " * " + h + ") / 2 = " + AreaTria;

// Paralelogramo
let Perimetroparalelo = 2 * (a + b);
let Areaparalelo = b * h;
document.getElementById("paraleloP").innerHTML = "2 * (" + a + " + " + b +") = " + Perimetroparalelo;
document.getElementById("paraleloA").innerHTML = "(" + b + " * " + h + ") = " + Areaparalelo;

// Rectangulo
let PerimetroRectA = 2 * (a + b);
let AreaRectA = b * a;
document.getElementById("RectAP").innerHTML = "2 * (" + a + " + " + b +") = " + PerimetroRectA;
document.getElementById("RectAA").innerHTML = "(" + b + " * " + a + ") = " + AreaRectA;

// Cuadrado
let Perimetrocua = 4 * a;
let Areacua = a ** 2;
document.getElementById("cuaP").innerHTML = "4 * " + a + " = " + Perimetrocua;
document.getElementById("cuaA").innerHTML = a + "^2 = " + Areacua;

// Rombo
let Perimetrorombo = 4 * a;
let Arearombo = (D * d) / 2;
document.getElementById("romboP").innerHTML = "4 * " + a + " = " + Perimetrorombo;
document.getElementById("romboA").innerHTML = "(" + D + " * " + d + ") / 2 = " + Arearombo;

// Cometa
let Perimetrocometa = 2 * (a + b);
let Areacometa = (D * d) / 2;
document.getElementById("cometaP").innerHTML = "2 * (" + a + " + " + b +") = " + Perimetrocometa;
document.getElementById("cometaA").innerHTML = "(" + D + " * " + d + ") / 2 = " + Areacometa;

// Trapecio
let Perimetrotra = a + b + c + d;
let Areatra = ((B + b) * h) / 2;
document.getElementById("traP").innerHTML = a + " + " + b + " + " + c + " + " + d + " = " + Perimetrotra;
document.getElementById("traA").innerHTML = "((" + B + " + " + b + ") * " + h + ") / 2 = " + Areatra;

// Círculo
let Perimetrocir = 2 * π * r;
let Areacir = π * r^2;
document.getElementById("cirP").innerHTML = "2 * π * " + r + " = " + Perimetrocir;
document.getElementById("cirA").innerHTML = "π * " + r + "^2 = " + Areacir;


