/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Laís Zanqueta 
*/

const teclado = require (`prompt-sync`)();

let totalAltura: number = 0;
let contador: number = 0;
let pessoaAtual: number = 1;

while (pessoaAtual <= 10) {
    let idade: number = parseInt(teclado(`Digite a idade da pessoa ${pessoaAtual}:`));
    let altura: number = parseInt(teclado(`Digite a altura da pessoa ${pessoaAtual}:`));

    if (idade >= 18) {
        totalAltura += altura;
        contador++;
    }

    pessoaAtual++;
}

if (contador > 0) {
    let mediaAltura: number = totalAltura / contador;
    console.log(`A média das alturas das pessoas maiores de idade é: ${mediaAltura} metros.`);
} else {
    console.log("Não há pessoas maiores de idade para calcular a média.");
} 

