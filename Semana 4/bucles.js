let frutas = new Array;

frutas = ["manzana","pera","platano","naranja"];
console.log(frutas);

frutas.push("uva", "sandia");
console.log(frutas);

for (let i = 0; i < 5; i++) {
    console.log("El valor de i = " + i);
}
let contador = 0;
while (contador < frutas.length) {
console.log("El contador es = " + contador);
contador++;
}