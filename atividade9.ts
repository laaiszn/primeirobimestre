/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Laís Zanqueta
*/
let teclado = require('prompt-sync')();


let entrada1: number = parseInt(teclado(`Digite um número: `));
let entrada2: number = parseInt(teclado(`Digite um número: `));

let inicio: number = 0;
let fim: number = 0;

if (entrada1 >= entrada2) {
    inicio = entrada2;
    fim = entrada2;
}
else if (entrada2 >= entrada1) {
    inicio = entrada1;
    fim = entrada2;
}

console.log(`Números ímpares entre ${inicio} e ${fim}`);

do {
    if (inicio % 2 != 0) {
        console.log(inicio);
    }
    inicio++;
} while (inicio <= fim); 