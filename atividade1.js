//* 1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. 
// Depois peça outro número e
//  armazene na variável y. Mostre esses números. 
// Em seguida, faça com que x passe a ter o valor de y,
//  e que y passe a ter o valor de x e mostre os números.
// Nome Aluno: Laís Zanqueta
var teclado = require("prompt-sync")();
var x = parseFloat(teclado("Digite um n\u00FAmero: "));
var y = parseFloat(teclado("Digite outro n\u00FAmero: "));
console.log("Os n\u00FAmeros digitados foram: ".concat(x, " e ").concat(y));
var numtemp = x = y;
x = y;
y = numtemp;
console.log("Os n\u00FAmeros trocados s\u00E3o ".concat(x, " e ").concat(y));
