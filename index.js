const mousetrap = require('mousetrap')                                                            

var actualElemento = document.getElementById('numeroActual');
var resultadoElemento = document.getElementById('resultado');

var actual = '';
var resultado = 0;
var historial = [];

document.getElementById('botonC').onclick = clickClear;
document.getElementById('botonUno').onclick = clickUno;
document.getElementById('botonDos').onclick = clickDos;
document.getElementById('botonTres').onclick = clickTres;
document.getElementById('botonCuatro').onclick = clickCuatro;
document.getElementById('botonCinco').onclick = clickCinco;
document.getElementById('botonSeis').onclick = clickSeis;
document.getElementById('botonSiete').onclick = clickSiete;
document.getElementById('botonOcho').onclick = clickOcho;
document.getElementById('botonNueve').onclick = clickNueve;
document.getElementById('botonCero').onclick = clickCero;

document.getElementById('suma').onclick = clickSuma;
document.getElementById('resta').onclick = clickResta;
document.getElementById('division').onclick = clickDivision;
document.getElementById('mult').onclick = clickMult;
document.getElementById('eval').onclick = clickEval;
document.getElementById('botonDel').onclick = clickBorrar;
document.getElementById('ans').onclick = clickans;

function clickBorrar(){
    let temp = actual.slice(0,-1);
    actual = temp;
    actualElemento.innerHTML = actual;
}

function clickans(){
    let temp = resultado;
    actual += temp;
    actualElemento.innerHTML = actual;
}

function clickClear(){
    actual = '';
    resultado = 0;
    actualElemento.innerHTML = actual;
    resultadoElemento.innerHTML = resultado;
}

function clickUno(){
    actual += 1;
    actualElemento.innerHTML = actual;
}

function clickDos(){
    actual += 2;
    actualElemento.innerHTML = actual;
}

function clickTres(){
    actual += 3;
    actualElemento.innerHTML = actual;
}

function clickCuatro(){
    actual += 4;
    actualElemento.innerHTML = actual;
}

function clickCinco(){
    actual += 5;
    actualElemento.innerHTML = actual;
}

function clickSeis(){
    actual += 6;
    actualElemento.innerHTML = actual;
}

function clickSiete(){
    actual += 7;
    actualElemento.innerHTML = actual;
}

function clickOcho(){
    actual += 8;
    actualElemento.innerHTML = actual;
}

function clickNueve(){
    actual += 9;
    actualElemento.innerHTML = actual;
}

function clickCero(){
    actual += 0;
    actualElemento.innerHTML = actual;
}

function clickSuma(){
    actual += '+';
    actualElemento.innerHTML = actual;
}

function clickResta(){
    actual += '-';
    actualElemento.innerHTML = actual;
}

function clickMult(){
    actual += '*';
    actualElemento.innerHTML = actual;
}

function clickDivision(){
    actual += '/';
    actualElemento.innerHTML = actual;
}

function clickEval(){
    let temp = eval(actual);
    resultado = parseInt(temp);
    actual = '';

    historial.push(resultado);
    //console.log(historial);

    actualElemento.innerHTML = actual;
    resultadoElemento.innerHTML = resultado;
    update();
}

function update() {

    for (var i = 0; i < historial.length; i++) {
       
       var letters;
       var ul = document.getElementById("listaHistorial");
       var li = document.createElement("li");

       li.appendChild(document.createTextNode(historial[i]));
       ul.appendChild(li);

       letters += "<li>"  + historial[i] + "</li>";
    }

 document.getElementById("listaHistorial").innerHTML = letters;

}

mousetrap.bind('1',clickUno)
mousetrap.bind('2',clickDos)
mousetrap.bind('3',clickTres)
mousetrap.bind('4',clickCuatro)
mousetrap.bind('5',clickCinco)
mousetrap.bind('6',clickSeis)
mousetrap.bind('7',clickSiete)
mousetrap.bind('8',clickOcho)
mousetrap.bind('9',clickNueve)
mousetrap.bind('0',clickCero)
mousetrap.bind('+',clickSuma)
mousetrap.bind('-',clickResta)
mousetrap.bind('/',clickDivision)
mousetrap.bind('*',clickMult)
mousetrap.bind('=',clickEval)
mousetrap.bind('esc',clickClear)
