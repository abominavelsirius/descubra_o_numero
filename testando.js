alert('Boas vindas ao nosso site!');

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nome = prompt('Digite o seu nome');
let idade = prompt('Digite a sua idade');

if (idade >= 18) {
    alert("Pode tirar a habilitação!!");
}

if (idade <= 17) {
    alert("Idade insuficiente!!");
}