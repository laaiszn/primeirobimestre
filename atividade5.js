//5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
//Nome Aluno: Laís Zanqueta
var teclado = require('prompt-sync')();
var maior = 0;
var menor = 100;
var somaNotas = 0;
for (var i = 1; i <= 5; i++) {
    var nota = parseFloat(teclado("Digite a nota ".concat(i, ": ")));
    somaNotas += nota;
    if (nota > maior) {
        maior = nota;
    }
    if (nota < menor) {
        menor = nota;
    }
}
var media = somaNotas / 5;
console.log("Maior nota: ".concat(maior));
console.log("Menor nota: ".concat(menor));
console.log("M\u00E9dia das notas: ".concat(media.toFixed(2)));
