/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

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

const calculaMayorSalarioAnual = function(){
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

const calculaMenorSalarioAnual = function(){
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

const calculaSalarioAnualPromedio = function(){
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

const calculaSalarioMensualPromedio = function(){
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
    calculaMayorSalarioAnual();
    calculaMenorSalarioAnual();
    calculaSalarioAnualPromedio();
    calculaSalarioMensualPromedio();
    parrafoVacio.textContent = `El mayor salario anual es ${mayorSalario}, el menor es ${menorSalario}, el anual promedio ${salarioAnualPromedio}, y el mensual promedio es ${salarioMensualPromedio}`;
    return false;
}

$botonReiniciar.onclick = function(){
        location.reload();
}

