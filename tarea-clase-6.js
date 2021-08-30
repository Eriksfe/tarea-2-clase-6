const $botonAgregar = document.querySelector("#agrega-campo");
const $botonQuitar = document.querySelector("#quita-campo");
const $botonCalcular = document.querySelector("#calcular");
const $botonReiniciar = document.querySelector("#reiniciar");
const FORM = document.querySelector("form");
let labelSalarioAnual;
let inputSalarioAnual;
let div;
let arr = [];
let mayorSalario;
let menorSalario;
let salarioAnualPromedio;
let salarioMensualPromedio;
let parrafoVacio = document.querySelector("p");

const CALCULA_MAYOR_SALARIO_ANUAL = function(){
    const FAMILIARES_QUE_TRABAJAN = document.querySelectorAll("#familiar-que-trabaja");
    if(FAMILIARES_QUE_TRABAJAN.length === 1) {
        mayorSalario = document.querySelector("#monto-salario").value;
    } else {
        let salarioFamiliar = document.querySelectorAll("#monto-salario");
        for(let i=0; i < salarioFamiliar.length; i++){
            arr.push(salarioFamiliar[i].value);
        }
        mayorSalario = Math.max(...arr);
    }
}

const CALCULA_MENOR_SALARIO_ANUAL = function(){
    const FAMILIARES_QUE_TRABAJAN = document.querySelectorAll("#familiar-que-trabaja");
    if(FAMILIARES_QUE_TRABAJAN.length === 1) {
        menorSalario = document.querySelector("#monto-salario").value;
    } else {
        let salarioFamiliar = document.querySelectorAll("#monto-salario");
        for(let i=0; i < salarioFamiliar.length; i++){
            arr.push(salarioFamiliar[i].value);
        }
        menorSalario = Math.min(...arr);
    }
}

const CALCULA_SALARIO_ANUAL_PROMEDIO = function(){
    const FAMILIARES_QUE_TRABAJAN = document.querySelectorAll("#familiar-que-trabaja");
    if(FAMILIARES_QUE_TRABAJAN.length === 1) {
        salarioAnualPromedio = document.querySelector("#monto-salario").value;
    } else {
        let totalSalarios = 0;
        let salarioFamiliar = document.querySelectorAll("#monto-salario");
        for(let i=0; i < salarioFamiliar.length; i++){
            arr.push(salarioFamiliar[i].value);
            totalSalarios = totalSalarios + Number(arr[i]);
        }
        salarioAnualPromedio = totalSalarios / salarioFamiliar.length;
    }
}

const CALCULA_SALARIO_MENSUAL_PROMEDIO = function(){
    const MESES_EN_UN_ANIO = 12;
    const FAMILIARES_QUE_TRABAJAN = document.querySelectorAll("#familiar-que-trabaja");
    if(FAMILIARES_QUE_TRABAJAN.length === 1) {
        salarioMensualPromedio = document.querySelector("#monto-salario").value;
    } else {
        let totalSalarios = 0;
        let salarioFamiliar = document.querySelectorAll("#monto-salario");
        for(let i=0; i < salarioFamiliar.length; i++){
            arr.push(salarioFamiliar[i].value);
            totalSalarios = totalSalarios + Number(arr[i].value);
        }
        salarioMensualPromedio = salarioAnualPromedio / MESES_EN_UN_ANIO;
    }
}

$botonAgregar.onclick = function(){
    let espaciado = document.createElement("br");
    let div = document.createElement("div");
    div.id = "familiar-que-trabaja";
    div.className = "nuevo-div-familiar";
    labelSalarioAnual = document.createElement("label");
    labelSalarioAnual.textContent = "Salario anual del familiar: ";
    inputSalarioAnual = document.createElement("input");
    inputSalarioAnual.id = "monto-salario";
    inputSalarioAnual.type = "number";
    div.appendChild(labelSalarioAnual);
    div.appendChild(inputSalarioAnual);
    div.appendChild(espaciado);
    FORM.appendChild(div);
    return false;
}

$botonQuitar.onclick = function(){
    let div = document.querySelector(".nuevo-div-familiar");
    FORM.removeChild(div);
}

$botonCalcular.onclick = function(){
    CALCULA_MAYOR_SALARIO_ANUAL();
    CALCULA_MENOR_SALARIO_ANUAL();
    CALCULA_SALARIO_ANUAL_PROMEDIO();
    CALCULA_SALARIO_MENSUAL_PROMEDIO();
    parrafoVacio.textContent = `El mayor salario anual es ${mayorSalario}, el menor es ${menorSalario}, el anual promedio ${salarioAnualPromedio}, y el mensual promedio es ${salarioMensualPromedio}`;
    return false;
}

$botonReiniciar.onclick = function(){
        location.reload();
}

