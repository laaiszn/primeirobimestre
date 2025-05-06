/*
7 - Leia 10 números e mostre a soma dos positivos e a média dos negativos.
Nome Aluno: Laís Zanqueta
*/
var teclado = require('prompt-sync')();
var contador = 1;
var somaPositivos = 0;
var somaNegativos = 0;
var qntdNegativos = 0;
while (contador <= 10) {
    var numero = parseFloat(teclado("Digite o ".concat(contador, "\u00BA n\u00FAmero: ")));
    if (numero >= 0) {
        somaPositivos += numero;
    }
    else {
        somaNegativos += numero;
        qntdNegativos++;
    }
    contador++;
}
var mediaNegativos = 0;
if (qntdNegativos > 0) {
    mediaNegativos = somaNegativos / qntdNegativos;
}
console.log("Soma dos n\u00FAmeros positivos: ".concat(somaPositivos));
console.log("M\u00E9dia dos n\u00FAmeros negativos: ".concat(mediaNegativos));
