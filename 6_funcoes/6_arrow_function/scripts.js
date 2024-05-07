// Arrow functions são funções anônimas
let consoleTeste = () => {
  console.log('Olá mundo!');
};

consoleTeste();

let soma = (a, b) => {
  return a + b;
};

console.log(soma(10, 20));

// let divisao = (x, y) => {
//     if(y === 0){
//         console.log('Erro: Divisão não pode ser por zero');
//     }else{
//         return x / y;
//     }
// }

// console.log(divisao(3, 0));
//

let numero = parseInt(prompt('Digite um número: '));

const parOuImpar = (n) => {
  return n % 2;
};

if (parOuImpar(numero) === 0) {
  console.log('É par');
} else {
  console.log('É impar');
}
