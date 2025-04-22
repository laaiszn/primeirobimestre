/*
9 - Calcule a média de idades de várias pessoas. Pare se digitar idade negativa.
Nome Aluno: Laís Zanqueta
*/


let teclado = require('prompt-sync')();


let somaIdades = 0;
let qtdPessoas = 0;
let idade = 0;

while (idade >= 0) {
    idade = parseInt(teclado("Digite a idade (ou número negativo para parar): "));

    if (idade >= 0) {
        somaIdades += idade;
        qtdPessoas++;
    }
}

let media = 0;
if (qtdPessoas > 0) {
    media = somaIdades / qtdPessoas;
    console.log(`A média das idades é: ${media}`);
} else {
    console.log("Nenhuma idade válida foi digitada.");
}
