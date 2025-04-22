/*
6 - Leia 10 números inteiros e mostre quantos são pares e quantos são ímpares.
Nome Aluno: Laís Zanqueta
*/

let teclado = require('prompt-sync')();
let contador = 1;
let pares = 0;
let impares = 0;

while (contador <= 10) {
    let numero = parseInt(teclado(`Digite o ${contador}º número inteiro: `));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

    contador++;
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
