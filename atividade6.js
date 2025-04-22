/*
6 - Leia 10 números inteiros e mostre quantos são pares e quantos são ímpares.
Nome Aluno:
*/
var teclado = require('prompt-sync')();
var contador = 1;
var pares = 0;
var impares = 0;
while (contador <= 10) {
    var numero = parseInt(teclado("Digite o ".concat(contador, "\u00BA n\u00FAmero inteiro: ")));
    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
    contador++;
}
console.log("Quantidade de n\u00FAmeros pares: ".concat(pares));
console.log("Quantidade de n\u00FAmeros \u00EDmpares: ".concat(impares));
