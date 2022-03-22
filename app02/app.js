//CODIGO REUTILIZABLE MANTENIBLE Y FACIL DE ENTENDER

//ARRAY GENERAL
let NOTAS = [];

//DECTECTOR DE CLICK PARA BUSCAR LOS VALORES E INYECTARLO EN NOTAS PARA LUEGO
// LLAMAR LA FUNCION QUE CREA EL FORMULARIO

document.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.id == "btnGeneret") {

        let NotaGneral = document.getElementById("notaGeneral");


        if (parseInt(NotaGneral.value) > 0) {
            NOTAS.push(parseInt(NotaGneral.value))
            FormIterador();
            alertify.success("NOTA AGREGADA")


        } else {

            alertify.error("INGRESE UNA NOTA")

        }

    }
})

//ESTA FUNCION SE ENCARGA DE IR AL ARRAY NOTAS QUE SE ENCUENTRA EN LA LINEA 1 Y SUMAR TODOS LOS DATOS Y DIVIDIRLO EN LA CANTIDAD DE ITEMS DE LA MISMA

function realizar() {

    const valor = (a, b) => a + b;
    const suma = NOTAS.reduce(valor);

    const divicion = suma / NOTAS.length;

    //ESTAS DOS LINEAS SE ENCARGAN DE PINTAR EL RESULTADO EN LOS PRIMEROS DOS INPUT
    document.getElementById("suma").value = suma;
    document.getElementById("divicion").value = parseFloat(divicion);


}


// ESTA FUNCION NO ES NADA COMPLEJA SOLO SE ENCARGA DE ELIMINAR DE LA POSICION, UN SOLO ITEMS 
// LUEGO PROCEDE A LLAMAR LA FUNCION QUE SE ENCARGA DE PINTAR LOS DATOS QUE HAY EN NOTAS
// EN TONCES EL ELIMINA UNO Y LUEGO PINTA NUEVA MENTE EL RESTO QUE QUEDA EN NOTA
// MUCHO TEXT NODA COMPLEJO

function eliminar(index) {

    alertify.error("ELIMINADA")
    NOTAS.splice(index, 1)
    FormIterador();

}

//ESTA FUNCION SE CREO APARTE PARA QUE SI QUIERES REUTILIZAR EL CODIGO SE MAS SENCILLO

function FormIterador() {

    let div = document.getElementById("div_Content");
    let NotaGneral = document.getElementById("notaGeneral");
    let btn = document.getElementById('btnCalcular')
    NotaGneral.value = "";
    let btnCalcular = `<div class = "form-group col-12" > 
    <button onclick = "realizar()" class = "btn btn-outline-success p-4 col-12" > REALIZAR CALCULO </button>
                      </div >`;
    let FormNotas = ``;
    for (let index = 0; index < NOTAS.length; index++) {



        FormNotas += `<div class="col-lg-4 ml-2 mt-2 row">
                                <input disabled type="number" value="${NOTAS[index]}"  class="form-control mb-3 col-8 mr-1" placeholder="INGRESE SU NOTA${index}">
                                            <button onclick = "eliminar(${index})" class="btn mb-3 btn-danger " ><i class="far fa-trash-alt"></i></button>
                                            </div>
                                            `;

    }

    btn.innerHTML = btnCalcular

    if (FormNotas != '') {

        div.innerHTML = FormNotas;
    } else {
        div.innerHTML = `<h2 class="col-12 text-center m-4 mt-4 lead">NO HAY NOTAS AGREGADAS</h2>`;

    }


}
