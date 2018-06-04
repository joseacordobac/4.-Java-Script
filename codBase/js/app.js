
    var resultado = document.getElementById('display');
    var reset = document.getElementById('on');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var signo = document.getElementById('sign')
    var punto = document.getElementById("punto")

    var pressedNumber;
       //eventos de click      

    
    function validarPrimero() {
        if (resultado.textContent.length === 1 && resultado.textContent === "0" ) {
            return true;
        }else{
            return false;
        }
    }


    function isMaxNumber() {
        if (resultado.textContent.length === 8) {
            return true;
        }else{
            return false;
        }
    }

    function showNumber(numberToShow) {
        if (validarPrimero()) {

            resultado.textContent = numberToShow;
        } else {
            if (!isMaxNumber()) {  
                resultado.textContent = resultado.textContent + numberToShow;              
            }
        }
    }   


    function isPointShown() {
        var hasPoint = resultado.textContent.indexOf(".");

        if (!isMaxNumber && !hasPoint) {
            resultado.textContent = ".";            
        }
    }
       
    uno.onclick = function (e) {
        pressedNumber = "1";
      showNumber(pressedNumber);
    } 

    dos.onclick = function (e) {
        pressedNumber = "2";
        showNumber(pressedNumber);
    } 

    tres.onclick = function (e) {
        pressedNumber = "3";
        showNumber(pressedNumber);
    
} 

    cuatro.onclick = function (e) {
        pressedNumber = "4";
        showNumber(pressedNumber);
    
} 

    cinco.onclick = function (e) {
        pressedNumber = "5";
        showNumber(pressedNumber);
    
} 

    seis.onclick = function (e) {
        pressedNumber = "6";
        showNumber(pressedNumber);
   
} 

    siete.onclick = function (e) {
        pressedNumber = "7";
        showNumber(pressedNumber);

} 

    ocho.onclick = function (e) {
        pressedNumber = "8";
        showNumber(pressedNumber);
    
} 
    nueve.onclick = function (e) {
        pressedNumber = "9";
        showNumber(pressedNumber);
   
} 

    cero.onclick = function (e) {
        pressedNumber = "0";
        showNumber(pressedNumber);
   
} 


    punto.onclick = function (e) {
        pressedNumber = "."
        isPointShown(pressedNumber);
     }
     
    signo.onclick = function (e) {
        resultado.textContent = resultado.textContent * "-1"
    }    
    
    
 

    //Operaciones

    var operandoa;
    var operandob;
    var operacion;

    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function (e) {
        operandob = resultado.textContent;
        resolver();
    }

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}


function resolver() {
    var solucion = 0;
    switch (operacion) {
        case "+":
            solucion = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            solucion = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            solucion = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            solucion = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    showNumber(solucion.toString());
}







