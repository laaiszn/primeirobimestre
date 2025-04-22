/*
10 - Verifique se um número é primo.
Nome Aluno:Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var numero = parseInt(teclado("Digite um número para saber se é primo: "));
var divisores = 0;
var contador = 1;
while (contador <= numero) {
    if (numero % contador === 0) {
        divisores++;
    }
    contador++;
}
if (divisores === 2) {
    console.log("".concat(numero, " \u00E9 primo."));
}
else {
    console.log("".concat(numero, " n\u00E3o \u00E9 primo."));
}
