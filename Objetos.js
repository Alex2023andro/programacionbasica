const VOCALES = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'á','Á', 'é', 'É', 'í', 'Í', 'ó', 'Ó', 'ú', 'Ú'];
const CONSONANTES = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y','Z']

function contarLetras(texto) {
    let letrasObjeto = {
        vocales: [],
        consonantes: new Array
    }

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        let consonan = true;

        for (let i = 0; i < VOCALES.length; i++) {
            const vocal = VOCALES[i];

           if (letra == vocal) {
                letrasObjeto.vocales.push(vocal);
                consonan = false;
                break;
           }
        }   
        if (consonan) {
            for (let i = 0; i < CONSONANTES.length; i++){
                const consonante = CONSONANTES[i]

                if (letra == consonante) {
                    letrasObjeto.consonantes.push(consonante);
                    break;
                }
            }  
        }
    }

        
    return letrasObjeto; 
}  

    let texto = 'Montana'      
    let letras = contarLetras(texto);
    console.log(' La palabra ' + texto + ' contiene ' + letras.vocales.length + ' vocales y ' + letras.consonantes.length 
    + ' consonantes y son las siguientes: ');
    console.log(' vocales: [' + letras.vocales + ']');
    console.log('consonantes: [' + letras.consonantes + ']');
    
