const prompt = require("prompt-sync")();
let total = 0;
let cantidad = 0;
let precio;

do {
    precio = prompt("Ingrese el precio del producto (si quiere finalizar ingrese 0): ");

    if (precio != null) {
        if (isNaN(precio) || precio < 0 || precio == "") {
         console.log("Error, ingrese un precio válido");
        } else {
            precio = Number(precio);

            if (precio > 0) {
                total = total + precio;
                cantidad = cantidad + 1;
            }
        }
    }

} while (precio != 0 && precio != null);

console.log("Cantidad de productos registrados: " + cantidad);
console.log("Total a pagar: $" + total);
