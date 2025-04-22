//8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para cada sexo.
//Nome aluno: Laís Zanqueta


let teclado = require('prompt-sync')();

/*
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome Aluno: Laís Zanqueta
*/

let contador = 1;
let somaIdadeF= 0;
let somaIdadeM = 0;
let totalFeminino = 0;
let totalMasculino = 0;

while (contador <= 50) {
    console.log(`Pessoa ${contador}:`);

    let idade = parseInt(teclado("Digite a idade: "));
    let sexo = teclado("Digite o sexo (F para feminino, M para masculino): ")();

    if (sexo === "F") {
        somaIdadeF+= idade;
        totalFeminino += 1;
    } else if (sexo === "M") {
        somaIdadeM += idade;
        totalMasculino += 1;
    } else {
        console.log("Sexo inválido, digite apenas F ou M.");
        continue; 
    }

    contador += 1;
}

let mediaFeminino = totalFeminino > 0 ? somaIdadeF / totalFeminino : 0;
let mediaMasculino = totalMasculino > 0 ? somaIdadeM / totalMasculino : 0;

console.log(`Média de idade do sexo feminino: ${totalFeminino}`);

console.log(`Média de idade do sexo masculino: ${totalMasculino}`);