alert("Bem-vindo ao jogo do número secreto!!!");

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');
console.log(numeroSecreto);





if (numeroSecreto == chute) {
    alert(`Você acertou o número secreto ${numeroSecreto}!`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
} else {
    alert(`O número secreto é maior que ${chute}`);
}
}


