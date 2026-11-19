
console.log("Script cargado exitosamente"); 

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("Telefono");
const edad = document.getElementById("edad");
const direccion = document.getElementById('direccion');
const provincia = document.getElementById("provincia");
const codigoPostal = document.getElementById("codigo_postal");

const metodosContacto = document.querySelectorAll(
    'input[name="metodoContacto"]'

);

const suscripcionInteres = document.querySelectorAll('input[name="suscripcion"]');



function actualizarSuscripciones(){
        const seleccionados= [];
        suscripcionInteres.forEach(susc=>{
            if (susc.checked===true) {
                seleccionados.push(susc.value);
                
            }
        })
        suscripcionInteresTD.innerText=seleccionados.join(",");
}
    
function actualizarMetodoContacto(){
    metodosContacto.forEach(metodo1=>{
    if (metodo1.checked===true){
                metodosContactoTD.innerText = metodo1.value;
            }
        }); 
}


const nombreTD = document.getElementById("resumen-nombre");
const apellidoTD = document.getElementById("resumen-apellido");
const emailTD = document.getElementById("resumen-correo-electronico");
const telefonoTD = document.getElementById("resumen-telefono");

const edadTD = document.getElementById("resumen-edad");
const direccionTD = document.getElementById('resumen-direccion');
const provinciaTD = document.getElementById("resumen-provincia");
const codigoPostalTD = document.getElementById("resumen-codigo-Postal");
const suscripcionInteresTD = document.getElementById("resumen-suscripcion");
const metodosContactoTD = document.getElementById('resumen-metodo-de-contacto-preferido');

//eventos: todos los if que agregue antes de los eventos, son para corroborar en que pagina estoy ejecutando, ya que el script esta asociado a dos documentos html, lo que hacia que
// el boton leer mas no funcione por que cuando ejecutaba en acercade, no encontraba el evento nombre que es perteneciente de contacto.

if (nombre && nombreTD) {
    nombre.addEventListener("input", function() {
        nombreTD.innerText = nombre.value;
    });
}

if (apellido && apellidoTD) {
    apellido.addEventListener("input", function() {
        apellidoTD.innerText = apellido.value;
    });
}

if (email && emailTD) {
    email.addEventListener("input", function() {
        emailTD.innerText = email.value;
    });
}

if (telefono && telefonoTD) {
    telefono.addEventListener("input", function() {
        telefonoTD.innerText = telefono.value;
    });
}

if (edad && edadTD) {
    edad.addEventListener("input", function() {
        edadTD.innerText = edad.value;
        if (edad.value < 18 && edad.value !== "") {
            edadTD.style.backgroundColor = "#ff0000";
            edadTD.innerText = edad.value + " (Menor de edad)";
        } else {
            edadTD.style.backgroundColor = "";
            edadTD.innerText = edad.value;
        }
    });
}

if (direccion && direccionTD) {
    direccion.addEventListener("input", function() {
        direccionTD.innerText = direccion.value;
    });
}

if (codigoPostal && codigoPostalTD) {
    codigoPostal.addEventListener("input", function() {
        codigoPostalTD.innerText = codigoPostal.value;
    });
}

if (provincia && provinciaTD) {
    provincia.addEventListener("change", function() {
        provinciaTD.innerText = provincia.value;
    });
}

if (suscripcionInteres.length>0 && suscripcionInteresTD) {
    suscripcionInteres.forEach(cb => {

    cb.addEventListener("change", actualizarSuscripciones);

});
    actualizarSuscripciones();
}

if (metodosContacto && metodosContactoTD) {
        
        metodosContacto.forEach(metodo=>{
            metodo.addEventListener("change", actualizarMetodoContacto)
        
    });
    actualizarMetodoContacto()
}

const botonLeerMas = document.getElementById("btn-leer-mas-klug-3903-68");
const cvCompleto = document.querySelector(".cv-completo");

if (botonLeerMas && cvCompleto) {
    botonLeerMas.addEventListener("click", function() {

        if (getComputedStyle(cvCompleto).display == "none") {
            cvCompleto.style.display = "block";
            botonLeerMas.innerText = "Leer menos";
        } else {
            cvCompleto.style.display = "none";
            botonLeerMas.innerText = "Leer más";
        }

    });
}

let intentos = 0;
let actualizar_numero = 0;
const get_intentos = document.getElementById('intentos');
const get_numero = document.getElementById("numero_ingresado");
const get_comprobar = document.getElementById("btn-comprobar-klug-3903-68");
const mostrar_mensaje = document.getElementById('mensaje');
const mostrar_record = document.getElementById('record');
const get_reiniciar = document.getElementById("btn-reiniciar-klug-3903-68");
let numero_secreto = Math.floor(Math.random() * 100) + 1;
let record = localStorage.getItem('record');

function actualizar_record() {
    if (record === null || intentos < Number(record)) {
        localStorage.setItem('record', intentos);
        record = localStorage.getItem('record');
        mostrar_record.textContent = 'Récord: ' + record;
    } else {
        mostrar_record.textContent = 'Récord: ' + record;
    }

}

function mostrar_record_guardado() {
    if (record === null) {
        mostrar_record.textContent = 'Récord: Sin establecer';
    } else {
        mostrar_record.textContent = 'Récord: ' + record;
    }
}
function actualizar_intento() {
    get_intentos.textContent = 'Intentos: ' + intentos;
}

function actualizar_mensaje(mensaje) {
    mostrar_mensaje.textContent = mensaje;
}

function limpiar_campo() {
    get_numero.value = '';
}

function reiniciar_juego() {
    limpiar_campo();
    intentos = 0;
    numero_secreto = Math.floor(Math.random() * 100) + 1;
    actualizar_mensaje('Ingrese un numero aleatorio del 1 al 100');
    actualizar_intento();
}

function comprobar_num() {
    if (Number(get_numero.value) === numero_secreto) {
        actualizar_mensaje("Acertaste!");
        limpiar_campo();
        intentos += 1;
        actualizar_intento();
        actualizar_record();
    } else if (Number(get_numero.value) > numero_secreto) {
        actualizar_mensaje("Muy alto");
        limpiar_campo();
        intentos += 1;
        actualizar_intento();
    } else if (Number(get_numero.value) < numero_secreto) {
        actualizar_mensaje('Muy bajo');
        limpiar_campo();
        intentos += 1;
        actualizar_intento();
    }
}
if (get_reiniciar && 
    get_comprobar&&
    get_intentos &&
    get_numero&&
    mostrar_mensaje&&
    numero_secreto&&
    record&&
    mostrar_record  ){
get_reiniciar.addEventListener("click", reiniciar_juego);
get_comprobar.addEventListener("click", comprobar_num);
mostrar_record_guardado();
}

