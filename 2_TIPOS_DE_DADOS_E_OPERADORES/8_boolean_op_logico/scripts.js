console.log('5 é maior que 3 e 3 é igual a 2? ' + (5 > 3 && 3 == 2));
console.log('5 é maior que 3 ou 3 é igual a 1? ' + (5 > 3 || 3 == 1));

console.log(
  '3 é maior que 3 e "Henrique" é igual a "Henrique"? ' +
    (3 == 3 && 'Henrique' == 'Henrique')
);

console.log(
  '"Henrique" é igual a "João" ou "false"? ' + ('Henrique' == 'João' || false)
);

console.log(
  'Negando que true e true dá verdadeiro, o resultado é? ' + !(true && true)
);

console.log(
  'Negando que true e true não dá verdadeiro, o resultado é? ' +
    !!(true && true)
);

console.log('true e true dá? ' + (true && true));
console.log('false ou false dá? ' + (false || false));
