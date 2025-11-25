const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("¿Cuál es tu nombre?");
  alert("¡Hola " + name + ", encantado de verte!");
};
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
let Perimetrocubo = a;
let Areacubo = a;
let Volumencubo = a;
document.getElementById("cuboP").innerHTML = " = " + Perimetrocubo;
document.getElementById("cuboA").innerHTML = " = " + Areacubo;
document.getElementById("conoV").innerHTML = " = " + Areacono;

// Esfera
let PerimetroEsfera = a;
let AreaEsfera = a;
let VolumenEsfera = a;
document.getElementById("EsferaP").innerHTML = " = " + PerimetroEsfera;
document.getElementById("EsferaA").innerHTML = " = " + AreaEsfera;
document.getElementById("EsferaV").innerHTML = " = " + Areacono;


