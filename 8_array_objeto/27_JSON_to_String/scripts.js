let pessoa = {
  nome: 'Henrique',
  idade: 29,
  profissao: 'Programador',
  hobbies: ['Video game', 'Leitura', 'Correr'],
};

// Transforma um JSON em String
let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

// Transforma uma String em JSON
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
