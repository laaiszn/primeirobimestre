let teclado= require(`prompt-sync`)();

console.log("Escolha um modelo de carro: ");
console.log("1 - BMW - R$ 300000");
console.log("2 - Mercedes - R$ 400000");
console.log("3 - Civic - R$ 200000");
console.log("4 - Fiat toro - R$ 100000");

let opcao = parseInt(teclado("Digite o número do carro que você deseja comprar: "));
let formaPagamento = parseInt(teclado("Escolha a forma de pagamento (à vista = 0 ou parcelado = 1): "));

let modelo, preco;

if (opcao == 1) {
  modelo = "BMW";
  preco = 300000;
} else if (opcao == 2) {
  modelo = "Mercedes";
  preco = 400000;
} else if (opcao == 3) {
  modelo = "Civic";
  preco = 200000;
} else if (opcao == 4) {
  modelo = "Fiat toro";
  preco = 100000;
} else {
  console.log("Escolha inválida.");
}

let precoFinal;

if (formaPagamento == 0) {
  precoFinal = preco * 0.85;
} else if (formaPagamento == 1) {
  precoFinal = preco * 1.13;
} else {
  console.log("Forma de pagamento inválida.");
}

console.log(`Você escolheu o ${modelo} por R$ ${preco}`);
console.log(`Forma de pagamento: ${formaPagamento}`);
console.log(`Valor final: R$ ${precoFinal}`); 
console.log(`Obrigada por comprar conosco :)`);