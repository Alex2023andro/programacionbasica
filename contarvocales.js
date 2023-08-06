const VOCALES = ['a','A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'á','Á', 'é', 'É', 'í', 'Í', 'ó', 'Ó', 'ú', 'Ú'];
const CONSONANTES = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y','Z']

function ContarLetras(texto, ARREGLO) {
let LetrasArray = [];

for (let i = 0; i < texto.length; i++) {
 const letra = texto[i]
 for (let i = 0; i < ARREGLO.length; i++) {
    const vocalConsonante = ARREGLO[i];

    if (letra == vocalConsonante) {
        LetrasArray.push(vocalConsonante);
        break;
    }
 }
}
return console.log(LetrasArray);
}

let texto = 'actividades'
ContarLetras(texto, VOCALES);
