let carros = ['BMW', 'Audi', 'VW', 'Fiat'];

let removePrimeiroCarro = carros.shift(); // Remove o primeiro elemento do array

console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift('Gurgel'); // Adiciona um elemento na primeira posiçao do array

console.log(carros);
console.log(carros[0]);