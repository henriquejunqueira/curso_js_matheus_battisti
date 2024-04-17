let numero = 17;
let divisoes = 0;

for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`${numero} é número primo`);
}else{
    console.log(`${numero} não é número primo`);
}