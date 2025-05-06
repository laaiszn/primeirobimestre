/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var entrada1 = parseInt(teclado("Digite um n\u00FAmero: "));
var entrada2 = parseInt(teclado("Digite um n\u00FAmero: "));
var inicio = 0;
var fim = 0;
if (entrada1 >= entrada2) {
    inicio = entrada2;
    fim = entrada2;
}
else if (entrada2 >= entrada1) {
    inicio = entrada1;
    fim = entrada2;
}
console.log("N\u00FAmeros \u00EDmpares entre ".concat(inicio, " e ").concat(fim));
do {
    if (inicio % 2 != 0) {
        console.log(inicio);
    }
    inicio++;
} while (inicio <= fim);
