//8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para cada sexo.
//Nome aluno: Laís Zanqueta
var teclado = require('prompt-sync')();
var contador = 1;
var dentroDoIntervalo = 0;
while (contador <= 20) {
    var numero = parseFloat(teclado("Digite o ".concat(contador, "\u00BA n\u00FAmero: ")));
    if (numero >= 0 && numero <= 100) {
        dentroDoIntervalo++;
    }
    contador++;
}
console.log("Quantidade de n\u00FAmeros entre 0 e 100: ".concat(dentroDoIntervalo));
