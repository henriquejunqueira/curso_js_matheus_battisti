// O parâmetro 'x' está sendo o limite que o número aleatório pode chegar pra ser gerado
function numeroAleatorio(x){
    return Math.floor(Math.random() * x) + 1;
}

console.log(numeroAleatorio(10)); // Limite de números aleatórios de 0 a 10
console.log(numeroAleatorio(100)); // Limite de números aleatórios de 0 a 100
console.log(numeroAleatorio(50)); // Limite de números aleatórios de 0 a 50