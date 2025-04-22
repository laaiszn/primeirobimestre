//* 1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. 
// Depois peça outro número e
//  armazene na variável y. Mostre esses números. 
// Em seguida, faça com que x passe a ter o valor de y,
//  e que y passe a ter o valor de x e mostre os números.
// Nome Aluno: Laís Zanqueta

let teclado = require(`prompt-sync`)();

let x:number = parseFloat(teclado(`Digite um número: `));
let y:number = parseFloat(teclado(`Digite outro número: `));

console.log(`Os números digitados foram: ${x} e ${y}`);

let numtemp: number = x=y;
 x = y;
 y = numtemp;
console.log (`Os números trocados são ${x} e ${y}`);