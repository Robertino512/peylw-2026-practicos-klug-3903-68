console.log("Script cargado exitosamente"); 

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("Telefono");
const edad = document.getElementById("edad");
const direccion = document.getElementById('direccion');
const provincia = document.getElementById("provincia");
const codigoPostal = document.getElementById("codigo postal");

const metodosContacto = document.querySelectorAll(
    'input[name="metodoContacto"]'
);
const suscripcionInteres = document.querySelectorAll(
    'input[name="suscripcion"]'
);


const nombreTD = document.getElementById("resumen-nombre");
const apellidoTD = document.getElementById("resumen-apellido");
const emailTD = document.getElementById("resumen-correo electronico");
const telefonoTD = document.getElementById("resumen-telefono");
const edadTD = document.getElementById("resumen-edad");
const direccionTD = document.getElementById('resumen-direccion');
const provinciaTD = document.getElementById("resumen-provincia");
const codigoPostalTD = document.getElementById("resumen-codigo Postal");
const suscripcionInteresTD=document.getElementById("resumen-suscripcion")
const metodosContactoTD=document.getElementById('resumen-metodo de contacto preferido"')

//eventos: todos los if que agregue antes de los eventos, son para corroborar en que pagina estoy ejecutando, ya que el script esta asociado a dos documentos html, lo que hacia que
//  el boton leer mas no funcione por que cuando ejecutaba en acercade, no encontraba el evento nombre que es perteneciente de contacto.

if (nombre && nombreTD){
nombre.addEventListener("input", function() {
    nombreTD.innerText = nombre.value;

});
}
if (apellido && apellidoTD){
apellido.addEventListener("input", function() {
    apellidoTD.innerText = apellido.value;

});
}

if (email && emailTD){
email.addEventListener("input", function() {
    emailTD.innerText = email.value;
});
}
if (telefono && telefonoTD){
telefono.addEventListener("input", function() {
    telefonoTD.innerText = telefono.value;
});
}
if (edad && edadTD){
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
if (direccion && direccionTD){
direccion.addEventListener("input", function() {
    direccionTD.innerText = direccion.value;
});
}

if (codigoPostal && codigoPostalTD){
codigoPostal.addEventListener("input", function() {
    codigoPostalTD.innerText = codigoPostal.value;
});
}

if (provincia && provinciaTD){
provincia.addEventListener("change", function() {
    provinciaTD.innerText = provincia.value;
});
}
if (suscripcionInteres && suscripcionInteresTD){
suscripcionInteres.addEventListener("change", function() {
    suscripcionInteresTD.innerText = suscripcionInteres.value;
});
}

if (metodosContacto && metodosContactoTD){
metodosContacto.addEventListener("change", function() {
    metodosContactoTD.innerText = metodosContacto.value;
});
}

const botonLeerMas = document.getElementById("btn-leer-mas-klug-3903-68");
const cvCompleto = document.querySelector(".cv-completo");


if (botonLeerMas && cvCompleto) {
    botonLeerMas.addEventListener("click", function() {
     

    if (cvCompleto.style.display === "none") {
        cvCompleto.style.display = "block";
        botonLeerMas.innerText = "Leer menos";

    } else {
        cvCompleto.style.display = "none";
        botonLeerMas.innerText = "Leer más";
    }

});

}












