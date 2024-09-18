let nome = 'Henrique';
let idade = 30;

// if (nome != undefined) {
if (nome != undefined && nome == 'Joaquim') {
  console.log('Nome está definido');
  // } else if (nome == 'Henrique' && nome.length > 5) {
} else if (nome == 'Henrique' && nome.length > 5 && idade == 50) {
  console.log('O nome é Henrique');
} else {
  console.log('Não é Henrique');
}

if (1 > 2) {
  console.log('Teste');
} else if (1 == 1) {
  console.log('Testando');
}
