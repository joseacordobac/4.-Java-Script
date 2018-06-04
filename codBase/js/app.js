
    var resultado = document.getElementById('display');
    var { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, punto, signo, reset, suma, resta, multiplicacion, division, igual } = global();

    var pressedNumber;
function global() {
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
    var signo = document.getElementById('sign');
    var punto = document.getElementById("punto");
    return { uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero, punto, signo, reset, suma, resta, multiplicacion, division, igual };
}

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


    reset.onclick = function (e) {
        resetear();
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


/* ===========================================
            EFECTO BOTON
===========================================*/

//uno

function press() {
    document.getElementById("1").classList.add("press")
    
};

function unpress() {
    document.getElementById("1").classList.remove("press")
        ;
}

document.getElementById("1").onmousedown = function () {
        press()
};


document.getElementById("1").onmouseup =  function () {
    unpress()
};

// dos

function press2() {
    document.getElementById("2").classList.add("press")

};

function unpress2() {
    document.getElementById("2").classList.remove("press")
        ;
}

document.getElementById("2").onmousedown = function () {
    press2()
};


document.getElementById("2").onmouseup = function () {
    unpress2()
};

// tres

function press3() {
    document.getElementById("3").classList.add("press")

};

function unpress3() {
    document.getElementById("3").classList.remove("press")
        ;
}

document.getElementById("3").onmousedown = function () {
    press3()
};


document.getElementById("3").onmouseup = function () {
    unpress3()
};

// cuatro

function press4() {
    document.getElementById("4").classList.add("press")

};

function unpress4() {
    document.getElementById("4").classList.remove("press")
        ;
}

document.getElementById("4").onmousedown = function () {
    press4()
};


document.getElementById("4").onmouseup = function () {
    unpress4()
};

// cinco

function press5() {
    document.getElementById("5").classList.add("press")

};

function unpress5() {
    document.getElementById("5").classList.remove("press")
        ;
}

document.getElementById("5").onmousedown = function () {
    press5()
};


document.getElementById("5").onmouseup = function () {
    unpress5()
};

// seis

function press6() {
    document.getElementById("6").classList.add("press")

};

function unpress6() {
    document.getElementById("6").classList.remove("press")
        ;
}

document.getElementById("6").onmousedown = function () {
    press6()
};


document.getElementById("6").onmouseup = function () {
    unpress6()
};

// siete

function press7() {
    document.getElementById("7").classList.add("press")

};

function unpress7() {
    document.getElementById("7").classList.remove("press")
        ;
}

document.getElementById("7").onmousedown = function () {
    press7()
};


document.getElementById("7").onmouseup = function () {
    unpress7()
};

// ocho

function press8() {
    document.getElementById("8").classList.add("press")

};

function unpress8() {
    document.getElementById("8").classList.remove("press")
        ;
}

document.getElementById("8").onmousedown = function () {
    press8()
};


document.getElementById("8").onmouseup = function () {
    unpress8()
};

// nueve

function press9() {
    document.getElementById("9").classList.add("press")

};

function unpress9() {
    document.getElementById("9").classList.remove("press")
        ;
}

document.getElementById("9").onmousedown = function () {
    press9()
};


document.getElementById("9").onmouseup = function () {
    unpress9()
};


// Cero

function press0() {
    document.getElementById("0").classList.add("press")

};

function unpress0() {
    document.getElementById("0").classList.remove("press")
        ;
}

document.getElementById("0").onmousedown = function () {
    press0()
};


document.getElementById("0").onmouseup = function () {
    unpress0()
};

// resta

function pressmenos() {
    document.getElementById("menos").classList.add("press")

};

function unpressmenos() {
    document.getElementById("menos").classList.remove("press")
        ;
}

document.getElementById("menos").onmousedown = function () {
    pressmenos()
};


document.getElementById("menos").onmouseup = function () {
    unpressmenos()
};

// suma

function pressmas() {
    document.getElementById("mas").classList.add("press")

};

function unpressmas() {
    document.getElementById("mas").classList.remove("press")
        ;
}

document.getElementById("mas").onmousedown = function () {
    pressmas()
};


document.getElementById("mas").onmouseup = function () {
    unpressmas()
};

// multiplicación

function presspor() {
    document.getElementById("por").classList.add("press")

};

function unpresspor() {
    document.getElementById("por").classList.remove("press")
        ;
}

document.getElementById("por").onmousedown = function () {
    presspor()
};


document.getElementById("por").onmouseup = function () {
    unpresspor()
};

// división

function pressdividido() {
    document.getElementById("dividido").classList.add("press")

};

function unpressdividido() {
    document.getElementById("dividido").classList.remove("press")
        ;
}

document.getElementById("dividido").onmousedown = function () {
    pressdividido()
};


document.getElementById("dividido").onmouseup = function () {
    unpressdividido()
};

// igual

function pressigual() {
    document.getElementById("igual").classList.add("press")

};

function unpressigual() {
    document.getElementById("igual").classList.remove("press")
        ;
}

document.getElementById("igual").onmousedown = function () {
    pressigual()
};


document.getElementById("igual").onmouseup = function () {
    unpressigual()
};

// reset

function presson() {
    document.getElementById("on").classList.add("press")

};

function unpresson() {
    document.getElementById("on").classList.remove("press")
        ;
}

document.getElementById("on").onmousedown = function () {
    presson()
};


document.getElementById("on").onmouseup = function () {
    unpresson()
};

// signos

function presssign() {
    document.getElementById("sign").classList.add("press")

};

function unpresssign() {
    document.getElementById("sign").classList.remove("press")
        ;
}

document.getElementById("sign").onmousedown = function () {
    presssign()
};


document.getElementById("sign").onmouseup = function () {
    unpresssign()
};

// raiz

function pressraiz() {
    document.getElementById("raiz").classList.add("press")

};

function unpressraiz() {
    document.getElementById("raiz").classList.remove("press")
        ;
}

document.getElementById("raiz").onmousedown = function () {
    pressraiz()
};


document.getElementById("raiz").onmouseup = function () {
    unpressraiz()
};


// punto

function presspunton() {
    document.getElementById("punto").classList.add("press")

};

function unpresspunto() {
    document.getElementById("punto").classList.remove("press")
        ;
}

document.getElementById("punto").onmousedown = function () {
    presspunto()
};


document.getElementById("punto").onmouseup = function () {
    unpresspunto()
};









