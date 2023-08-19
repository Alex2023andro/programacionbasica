function sumaNumerosPares(numPar) {
    let numeros = {
        pares: {
            array: new Array,
            suma: 0,
        },
        impares: {
            array: new Array,
            suma: 0,
        }
    }
    
    if (numPar < 1) {
        return console.log("Favor de ingresar un numero mayor");
    } 
    
    for (let i = 1; i <= numPar;i++) {
        let tipo;
        if (i % 2 ===0) {
            tipo = numeros.pares;
        } else {
            tipo = numeros.impares;
        }
        tipo.array.push (i);
        tipo.suma += i 
    }
    return numeros; 
    } 

    let numeros = sumaNumerosPares(10);
    

console.log('La suma de los numeros pares [' + numeros.pares.array + '] es: ' + numeros.pares.suma);
console.log('La suma de los numeros impares [' + numeros.impares.array + '] es: ' + numeros.impares.suma);
