1)La opcion de juego que seleccione fue la de adivinanzas de numeros, ya que me gusta hacer uso de condicionales.


2) en este fragmento de codigo hago uso del almacenamiento local del navegador implementando la lectura y escritura del récord 

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

3) declare una variable global, pero es una variable que no muestra explicitamente su valor, sino que muestra como genera el numero secreto.