let titulo = document.getElementById("encabezado");
//console.log(titulo.textContent);

let concepto = document.getElementById("concepto");
concepto.style.color = "red"
//console.log(concepto.innerText)

let caracteristicas = document.getElementsByName("caracteristicas");
caracteristicas[0].style.color = "blue"
//console.log(caracteristicas[0].innerText);

let nuevoParrafo = document.createElement("p");
let textParrafo = document.createTextNode("aqui va el texto del parrafo");
let datoNuevo = document.getElementById("datos");
datoNuevo.appendChild(nuevoParrafo)
nuevoParrafo.appendChild(textParrafo)
//console.log(datoNuevo.innerHTML)


function validacion(){
    let nombre = document.getElementById("nombre");
    let radios = document.getElementsByName("programar");
    let estudiante = document.getElementById("estudiante");

}