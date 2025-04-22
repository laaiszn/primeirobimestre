var teclado = require('prompt-sync')();
/*
9 - Calcule a média de idades de várias pessoas. Pare se digitar idade negativa.
Nome Aluno:
*/
var somaIdades = 0;
var qtdPessoas = 0;
var idade = 0;
while (idade >= 0) {
    idade = parseInt(teclado("Digite a idade (ou número negativo para parar): "));
    if (idade >= 0) {
        somaIdades += idade;
        qtdPessoas++;
    }
}
var media = 0;
if (qtdPessoas > 0) {
    media = somaIdades / qtdPessoas;
    console.log("A m\u00E9dia das idades \u00E9: ".concat(media));
}
else {
    console.log("Nenhuma idade válida foi digitada.");
}
