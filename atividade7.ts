/*
7 - Leia 10 números e mostre a soma dos positivos e a média dos negativos.
Nome Aluno: Laís Zanqueta
*/

let teclado = require('prompt-sync')();

let contador: number = 1;
let somaPositivos: number = 0;
let somaNegativos: number = 0;
let qntdNegativos: number = 0;

while (contador <= 10) {
    let numero = parseFloat(teclado(`Digite o ${contador}º número: `));

    if (numero >= 0) {
        somaPositivos += numero;
    } else {
        somaNegativos += numero;
        qntdNegativos++;
    }

    contador++;
}

let mediaNegativos = 0;
if (qntdNegativos > 0) {
    mediaNegativos = somaNegativos / qntdNegativos;
}

console.log(`Soma dos números positivos: ${somaPositivos}`);
console.log(`Média dos números negativos: ${mediaNegativos}`); 

