function fibonacci(num) {

    let fibonacciArray = [0,1];

    switch (true) {
       case num <1:
        return console.log('Ingresa un numero mayor a 0');
        break;
        
        case num === 1 || num === 2:
            return fibonacciArray.slice(0,num);
            break;

        default:
            for (let i = 2; i < num; i++) {
                const nuevoValor = fibonacciArray[i - 1] + fibonacciArray[i - 2];
                fibonacciArray.push(nuevoValor);
            }
            return fibonacciArray;
            break;
    } 
}

console.log(fibonacci(20))
