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
    let nombre = document.getElementById("nombre").value;
    let radios = document.getElementsByName("programar");
    let estudia = document.getElementById("estudiante");
    let valorRadio = "";


    //el for recorre los inputs radios
    for(let i = 0;i < radios.length;i++){
        console.log(radios[i])//devuelve ambos nodos de input 
        if(radios[i].checked){//checked es si el input esta seleccionado
            valorRadio = radios[i].value;//guarda en la var el valor checkeado
            //console.log(valorRadio)
        }
    }
        //guardara en la var estudia el check del usuario
        if(estudia.checked){
            estudia = "Si"
        }else{
            estudia = "No"
        }
        //console.log(estaEstudiando)


        console.log(`Nombre: ${nombre} \nSabe programar: ${valorRadio} \nEs estudiante:  ${estudia}`);//interpolacion de datos
}



    /* for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            valorRadio = radios[a].value
        }
    } */
