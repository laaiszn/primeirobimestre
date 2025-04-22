//2 - Escreva um programa que receba três números inteiros e mostre eles em ordem decrescente.
//////Nome Aluno: Laís Zanqueta
let teclado = require('prompt-sync')();

console.log("Digite três números para ver em ordem decrescente:");

let n1 = parseFloat(teclado("Digite o primeiro número: "));
let n2 = parseFloat(teclado("Digite o segundo número: "));
let n3 = parseFloat(teclado("Digite o terceiro número: "));

if (n1 >= n2 && n2 >= n3) {
    console.log(`Ordem decrescente: ${n1}, ${n2}, ${n3}`);
} else if (n1 >= n3 && n3 >= n2) {
    console.log(`Ordem decrescente: ${n1}, ${n3}, ${n2}`);
} else if (n2 >= n1 && n1 >= n3) {
    console.log(`Ordem decrescente: ${n2}, ${n1}, ${n3}`);
} else if (n2 >= n3 && n3 >= n1) {
    console.log(`Ordem decrescente: ${n2}, ${n3}, ${n1}`);
} else if (n3 >= n1 && n1 >= n2) {
    console.log(`Ordem decrescente: ${n3}, ${n1}, ${n2}`);
} else {
    console.log(`Ordem decrescente: ${n3}, ${n2}, ${n1}`);
}

