
//4 - Desenvolva um programa que calcule a média de uma sequência de números informados
//pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
//não deseja mais continuar. Ao final, exiba a média dos valores digitados.
//Nome aluno: Laís Zanqueuta

let teclado = require('prompt-sync')();
let soma = 0;
let contador = 0;
let continuar = 's';

while (continuar === 's' || continuar === 'S') {
    let numero = parseFloat(teclado("Digite um número: "));
    soma += numero;
    contador++;
    continuar = teclado("Deseja continuar? (s/n): ");
}

if (contador > 0) {
    let media = soma / contador;
    console.log(`A média dos ${contador} números digitados é: ${2}`);
} else {
    console.log("Nenhum número foi digitado.");
}
