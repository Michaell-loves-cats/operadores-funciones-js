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
document.getElementById("conoP").innerHTML = a + "^2 = " + Perimetrocono;
document.getElementById("conoA").innerHTML = " = " + Areacono;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Paralelepípedo
let Areaparalele = ;
let Volumenparalele = a;
document.getElementById("paraleleP").innerHTML = " = " + Perimetroparalele;
document.getElementById("paraleleA").innerHTML = " = " + Areaparalele;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Cubo
let Areacubo = a;
let Volumencubo = a;
document.getElementById("cuboP").innerHTML = " = " + Perimetrocubo;
document.getElementById("cuboA").innerHTML = " = " + Areacubo;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Esfera
let AreaEsfera = a;
let VolumenEsfera = a;
document.getElementById("EsferaP").innerHTML = " = " + PerimetroEsfera;
document.getElementById("EsferaA").innerHTML = " = " + AreaEsfera;
document.getElementById("EsferaV").innerHTML = " = " + Areacono;