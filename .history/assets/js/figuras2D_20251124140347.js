function NumeroAlAzar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Codigo de developermozilla.org

let a, b, B, c, d, D, h;
const pi = 3.14;



document.getElementById("TriAP").innerHTML = NumeroAlAzar;