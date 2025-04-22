/*
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var valor = parseFloat(teclado("Digite um valor entre 0 e 100: "));
if (valor >= 10 && valor <= 20) {
    console.log("O valor está entre 10 e 20");
}
else if (valor > 20 && valor <= 30) {
    console.log("O valor está entre 20 e 30");
}
else if (valor > 30 && valor <= 40) {
    console.log("O valor está entre 30 e 40");
}
else if (valor > 40 && valor <= 50) {
    console.log("O valor está entre 40 e 50");
}
else if (valor > 50 && valor <= 60) {
    console.log("O valor está entre 50 e 60");
}
else if (valor > 60 && valor <= 70) {
    console.log("O valor está entre 60 e 70");
}
else if (valor > 70 && valor <= 80) {
    console.log("O valor está entre 70 e 80");
}
else if (valor > 80 && valor <= 90) {
    console.log("O valor está entre 80 e 90");
}
else if (valor > 90 && valor <= 100) {
    console.log("O valor está entre 90 e 100");
}
else {
    console.log("O valor está fora dos intervalos.");
}
