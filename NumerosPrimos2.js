/* -------- Actividad 2: --------
* Agrega en un array todos los números primos anteriores al número "n" dado en la función anterior.
*
* // Ejemplo de uso:
* // console.log(numerosPrimosHastaEl(17)); // Debera imprimir [2, 3, 5, 7, 11, 13, 17]
*/

function numerosPrimosHastaEl(num) {
    let numerosPrimos = new Array;

    if (num <= 1) {
        return console.log('No existen numeros primos antes del numero ' + num);
    };

    for (let i = 2; i < num; i++) {
        if (esPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    
    return console.log(numerosPrimos);
}

numerosPrimosHastaEl(88);