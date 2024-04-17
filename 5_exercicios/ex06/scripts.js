let idade = 29;
let cnh = false;

if(idade >= 18 && cnh === true){
    console.log('Você já pode dirigir');
}else if(idade >= 18 && cnh === false){
    console.log('Você não pode dirigir, mas pode fazer a CNH');
}else{
    console.log('Você não pode dirigir');
}