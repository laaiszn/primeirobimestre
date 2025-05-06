/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Laís Zanqueta
*/
var teclado = require("prompt-sync")();
var totalAltura = 0;
var contador = 0;
var pessoaAtual = 1;
while (pessoaAtual <= 10) {
    var idade = parseInt(teclado("Digite a idade da pessoa ".concat(pessoaAtual, ":")));
    var altura = parseInt(teclado("Digite a altura da pessoa ".concat(pessoaAtual, ":")));
    if (idade >= 18) {
        totalAltura += altura;
        contador++;
    }
    pessoaAtual++;
}
if (contador > 0) {
    var mediaAltura = totalAltura / contador;
    console.log("A m\u00E9dia das alturas das pessoas maiores de idade \u00E9: ".concat(mediaAltura, " metros."));
}
else {
    console.log("Não há pessoas maiores de idade para calcular a média.");
}
