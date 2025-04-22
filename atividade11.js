/*
11 - Mostrar a tabuada de um número.
Nome Aluno:Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var numero = parseInt(teclado("Digite um número para ver a tabuada: "));
var contador = 1;
while (contador <= 10) {
    var resultado = numero * contador;
    console.log("".concat(numero, " x ").concat(contador, " = ").concat(resultado));
    contador++;
}
