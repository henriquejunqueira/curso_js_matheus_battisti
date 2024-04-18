let pessoa = {
    nome: 'Henrique',
}

let pessoa2 = pessoa; // Cria uma cópia de objeto e quando o conteúdo for mudado, muda no outro também

let pessoa3 = {
    nome: 'Henrique',
}

console.log('Pessoa é igual à pessoa2? ', pessoa == pessoa2);
console.log('Pessoa3 é igual à pessoa? ', pessoa3 == pessoa);
console.log('Pessoa3 é igual à pessoa2? ', pessoa3 == pessoa2);

console.log(pessoa.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);

pessoa2.nome = "Pedro";

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa.nome = "Maria";

console.log(pessoa.nome);
console.log(pessoa2.nome);