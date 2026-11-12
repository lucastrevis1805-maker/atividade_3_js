// EX 1

const idadeUsuario = +prompt('Qual a sua idade?');

if (idadeUsuario >= 18) {
    console.log('Acesso liberado! Divirta-se.');
}

if (idadeUsuario < 18) {
     console.log('Acesso negado. Você é menor de idade.');
}


console.log("====================================");

// EX 2

const senhaCorreta ='front123';
const senhaDigitada = prompt('Digite a senha de acesso:');

if (senhaDigitada === senhaCorreta) {
    console.log('Login efetuado com sucesso!');
}

if (senhaDigitada != senhaCorreta) {
    console.log('Senha incorreta. Tente novamente');
}


console.log("====================================");

// EX 3

let valorCompra = +prompt('Digite o valor da compra:');

if (valorCompra > 100) {
    valorCompra = valorCompra - 10
}
console.log('Preço a ser pago: R$' + valorCompra);


console.log("====================================");

// EX 4

let pontos = 0;
const produtos = +prompt('Digite a quantidade de produtos comprados:');
const valorGasto = +prompt('Digite o valor gasto:');

if (produtos >= 5) {
     pontos = pontos + 50;
    console.log('Você ganhou', pontos, 'pontos extras!');
}

if (valorGasto >= 200) {
    pontos = pontos + 100;
    console.log('Você ganhou', pontos, 'pontos extras!');
}

if (produtos >= 100 && valorGasto == 200) {
    pontos = pontos + 150;
     console.log('Você ganhou', pontos, 'pontos extras!');
}



console.log("====================================");


// EX 5

let salarioBase = +prompt('Digite seu salário: R$');
const totalVendas = +prompt('Digite a quantidade de vendas:');
const notaAvaliacao = +prompt('Digite a nota de avaliação (0 a 10):');

if (totalVendas > 5000 && notaAvaliacao >= 8) {
    salarioBase = salarioBase * 1.15;
}

console.log('Salário com bonûs: R$' + salarioBase);


console.log("====================================");

// // EX 6

const valorPedido = +prompt('Digite o valor do pedido: R$');
const distanciaKM = +prompt('Digite a distância em KM:');
let taxa = 10;
let valorTotal = 0;

if (valorPedido < 30 || distanciaKM > 10) {
    taxa = taxa + 5;
    valorTotal = valorPedido + taxa;
}

console.log('Valor do pedido + as taxas de entrega: R$' + valorTotal);

