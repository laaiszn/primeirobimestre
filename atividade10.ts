/*
10 - Verifique se um número é primo.
Nome Aluno:Laís Zanqueta
*/




let teclado = require('prompt-sync')();


let numero = parseInt(teclado("Digite um número para saber se é primo: "));
let divisores = 0;
let contador = 1;

while (contador <= numero) {
    if (numero % contador === 0) {
        divisores++;
    }
    contador++;
}

if (divisores === 2) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}
