1) El fragmento para validar que utilice es este: if (edad.value < 18 && edad.value !== "") {
        edadTD.style.backgroundColor = "#ff0000";
        edadTD.innerText = edad.value + " (Menor de edad)";
    } else {
        edadTD.style.backgroundColor = "";
        edadTD.innerText = edad.value;
    }
});

2) utilizamos el evento input para los campos de texto ya que permite que se actualize la informacion de el campo en tiempo real, ya sea cuando el usuario borre o escriba una nueva letra. en cambio change lo usamos para cuando necesitamos confirmar el dato, como en un checkbox o radio

3) como lo explique en el comentario el script, hice un condicional por evento, para confirmar si estabamos parados sobre la pagina correcta, en otras palabras, los condicionales que agregue funcionan como un: si existe esta constante y esta, entonces ejecuta esto, y sino pasa al siguiente. Si el primer condicional dio false, por consecuencia todos los eventos daran false, ya que entre paginas no compartimos elementos ni funcionalidades. hasta que llega al condicional del boton leer mas, que dara true.