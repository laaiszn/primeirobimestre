/*
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var soma = 0;
var contador = 0;
var continuar = 's';
while (continuar === 's' || continuar === 'S') {
    var numero = parseFloat(teclado("Digite um número: "));
    soma += numero;
    contador++;
    continuar = teclado("Deseja continuar? (s/n): ");
}
if (contador > 0) {
    var media = soma / contador;
    console.log("A m\u00E9dia dos ".concat(contador, " n\u00FAmeros digitados \u00E9: ").concat(media.toFixed(2)));
}
else {
    console.log("Nenhum número foi digitado.");
}
