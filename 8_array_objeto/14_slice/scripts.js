let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.slice(4, 5));
console.log(numeros.slice(4, 6));

console.log(numeros.slice(2));

// Quando especificado número negativo, o slice decrementa o array
console.log(numeros.slice(-5));

// Exibe do indice 3 até o final, porém não exibindo os dois últimos por conta da decrementação com -2
console.log(numeros.slice(3, -2));