//Efecto en los botones.



//Asignación de valores
var a;
var b;
var operacion;

//Varibles matemeticas

a = 2;
b = 3;

var suma = a+b;
var resta = a-b;
var multiplicacion = a*b;
var division = a/b;


//Funcion para operacion.
function inicio() {
    // Variables par apantalla de resultados
     var resultado = document.getElementById("display");
     var on = document.getElementById("on");
     var signo = document.getElementById ("sign");
     var dividir = document.getElementById("dividido");
     var multiplicar = document.getElementById ("por");
     var restar = document.getElementById("menos");
     var sumar = document.getElementById("mas");
     var punto = document.getElementById("punto");
     var igual = document.getElementById ("igual");
     var uno = document.getElementById ("1");
     var dos = document.getElementById ("2");
     var tres = document.getElementById ("3");
     var cuatro = document.getElementById("4");
     var cinco = document.getElementById("5");
     var seis = document.getElementById("6");
     var siete = document.getElementById("7");
     var ocho = document.getElementById("8");
     var nueve = document.getElementById("9");
     var cero = document.getElementById("0 ");   
}

cero = 0;
uno = 1;
dos = 2;
tres = 3
cuatro = 4;
cinco = 5;
seis =  6;
siete = 7;
ocho = 8;
nueve = 9;

function nuno(params) {
    document.getElementById("display").innerHTML += uno
}
document.getElementById("1").onclick = function () {nuno()};

function ndos(params) {
    document.getElementById("display").innerHTML += dos
}
document.getElementById("2").onclick = function () { ndos() };