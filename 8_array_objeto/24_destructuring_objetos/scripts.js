let objeto = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0',
};

// ? Desestruturando o objeto
const {
  rodas: vRodas,
  portas: vPortas,
  tetosolar: vTetoSolar,
  motor: vMotor,
} = objeto;

console.log(vRodas);
console.log(vTetoSolar);
