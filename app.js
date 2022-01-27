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
    console.log(estudia)
    let valorRadio = "";
    let estaEstudiando = "";
    
    
    /* console.log(nombre);
    console.log(valorRadio); */
    for(let i = 0;i < radios.length;i++){
        //console.log(radios[i])
        if(radios[i].checked){
            valorRadio = radios[i].value;
            //onsole.log(valorRadio)
        }
    }

        if(estudia.checked){
            estudia = "Si"
        }else{
            estudia = "No"
        }
        //console.log(estaEstudiando)


        console.log(`Nombre: ${nombre} \nSabe programar: ${valorRadio} \nEs estudiante:  ${estudia}`);
}



    /* for (let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            valorRadio = radios[a].value
        }
    } */