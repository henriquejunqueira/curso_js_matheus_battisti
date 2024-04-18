let sku = '34';

/* padStart insere caracteres antes da string. 
Primeiro valor é quantos caracteres a string tem que ter, ou seja 6
Segundo valor é o que será adicionado, ou seja 0 */
console.log(sku.padStart(6, '0'));
console.log(sku.padStart(10, '@'));
console.log(sku.padStart(10, '#'));

let sku2 = '7348';
console.log(sku2.padStart(6, '0'));