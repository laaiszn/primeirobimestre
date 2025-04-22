
/*
11 - Mostrar a tabuada de um número.
Nome Aluno:Laís Zanqueta
*/


let teclado = require('prompt-sync')();



let numero = parseInt(teclado("Digite um número para ver a tabuada: "));
let contador = 1;

while (contador <= 10) {
    let resultado = numero * contador;
    console.log(`${numero} x ${contador} = ${resultado}`);
    contador++;
}
