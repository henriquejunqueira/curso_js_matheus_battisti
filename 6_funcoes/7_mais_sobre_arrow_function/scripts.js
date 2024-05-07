const multiplicarPorDois = (x) => {
  return x * 2;
};

console.log(multiplicarPorDois(2));

const multiplicarPorDois2 = (x) => x * 2;

console.log(multiplicarPorDois2(4));

let numero = parseInt(prompt('Digite um número: '));
let numero2 = parseInt(prompt('Digite um segundo número: '));

const raizQuadrada = (x) => {
  return x * x;
};

const raizQuadrada2 = (n) => n * n; // ! arrow function de uma linha

console.log(raizQuadrada(numero));
console.log(raizQuadrada2(numero2));
