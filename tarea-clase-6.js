/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para
completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector("#agregar-integrante");
const $botonEliminarIntegrante = document.querySelector("#eliminar-integrante");
const $botonCalcular = document.querySelector("#calcular");
const $botonEmpezarDeNuevo = document.querySelector("#empezar-de-nuevo")

const pasaValoresAlArray = function(){
    let valoresIngresados = document.querySelectorAll("#salario-integrante");
    let valoresArray = [];
    for(let i=0; i<valoresIngresados.length; i++) {
        valoresArray.push(Number(valoresIngresados[i].value));
    }
    return valoresArray;
}

const eliminaCerosDelArray = function() {
    let valoresArray = pasaValoresAlArray();
    let index = valoresArray.indexOf(0);
    if (index > -1) {
        valoresArray.splice(index, 1);
    }
    return valoresArray;
}

const calculaMayorSalarioAnual = function() {
    let valoresArray = eliminaCerosDelArray();
    return Math.max(...valoresArray);
}

const calculaMenorSalarioAnual = function() {
    let valoresArray = eliminaCerosDelArray();
    return Math.min(...valoresArray);
}

const calculaSalarioAnualPromedio = function() {
    let totalSalarios = 0;
    let valoresArray = eliminaCerosDelArray();
    for(let i=0; i<valoresArray.length; i++){
        totalSalarios = totalSalarios + Number(valoresArray[i]);
    }
    return totalSalarios / valoresArray.length;
}

const calculaSalarioMensualPromedio = function() {
    const MESES_EN_UN_ANIO = 12;
    let salarioAnualPromedio = calculaSalarioAnualPromedio();
    return salarioAnualPromedio / MESES_EN_UN_ANIO;
}

const muestraResultadosEnPantalla = function(){
    let infoSalarioAnualPromedio = document.querySelector("#salario-anual-promedio");
    let infoMayorSalarioAnual = document.querySelector("#mayor-salario-anual");
    let infoMenorSalarioAnual = document.querySelector("#menor-salario-anual");
    let infoSalarioMensualPromedio = document.querySelector("#salario-mensual-promedio");
    infoSalarioAnualPromedio.textContent = `El salario anual promedio es ${calculaSalarioAnualPromedio()}`;
    infoMayorSalarioAnual.textContent = `El mayor salario anual ${calculaMayorSalarioAnual()}`;
    infoMenorSalarioAnual.textContent = `El menor salario anual es ${calculaMenorSalarioAnual()}`;
    infoSalarioMensualPromedio.textContent = `El salario mensual promedio es ${calculaSalarioMensualPromedio()}`;
}

$botonAgregarIntegrante.onclick = function(){
    let formIngresoDeValores = document.querySelector("form");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "ingreso-valores";
    let nuevaLabel = document.createElement("label");
    nuevaLabel.textContent = "Salario del integrante: ";
    let nuevoInput = document.createElement("input");
    nuevoInput.className = "nuevo-integrante";
    nuevoInput.type = "number";
    nuevoInput.id = "salario-integrante";
    nuevoDiv.appendChild(nuevaLabel);
    nuevoDiv.appendChild(nuevoInput);
    formIngresoDeValores.appendChild(nuevoDiv);
    return false;
}

$botonEliminarIntegrante.onclick = function(){
    let divs = document.querySelectorAll(".ingreso-valores");
    if(divs.length === 0)
    return;
    let ultimoElemento = divs[divs.length - 1];
    ultimoElemento.parentNode.removeChild(ultimoElemento);
    return false;
}

$botonCalcular.onclick = function(){
    muestraResultadosEnPantalla();
    return false;
}

$botonEmpezarDeNuevo.onclick = function(){
    location.reload();
}

