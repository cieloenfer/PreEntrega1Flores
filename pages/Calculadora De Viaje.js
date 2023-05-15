//Funcion

function CalcularGastos(){
    let pasajes = parseFloat(prompt("ingresa el valor de los pasajes"))
    let comida = parseFloat(prompt("ingresa el gasto estimado a comida"))
    let hospedaje = parseFloat(prompt("ingresa el valor del hospedaje"))
    let tours = parseFloat(prompt("ingresa precio estimado para tours y circuitos"))
    let recuerdos = parseFloat(prompt("ingresa precio estimado para compras"))
    let operacion = prompt("elige el calculo que necesitas; (+)").trim()
    switch (operacion) {
        case "+":
            return pasajes + comida + hospedaje + tours + recuerdos
    
        default:
            console.warn("No pudimos calcular el gasto final de tus vacaciones")
            break;
    }
}

let resultado = CalcularGastos()
    console.log("Gasto final para tus vacaciones:", resultado)