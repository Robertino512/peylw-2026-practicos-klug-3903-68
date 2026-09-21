1) Codigo utilizado: <label for="codigo postal">Codigo Postal:</label>
        <input type="text" id="codigo postal"  pattern="^[A-Z]\d{4}[A-Z]{3}$" title="Formato requerido: una letra mayúscula, cuatro dígitos, y tres letras mayúsculas" placeholder="ej: R8500AAF" required>

2) La etiqueta label sirve para indicar al usuario en un formulario que dato tiene que ingresar, es como un texto descriptivo, (DISTINTO DE PLACEHOLDER). Se relacionan correctamente mediante el atributo for usando un identificador que use el mismo valor que el mismo for de label. Asi quedan perfectamente relacionados

3) Los campos de seleccion circular radio se comportan como un grupo entero y se elige solo una opcion cuando comparten el mismo name, y cuando tienen diferente valor de name, interactuan de forma individual a la hora de elegir y se puede seleccionar mas de una opcion.