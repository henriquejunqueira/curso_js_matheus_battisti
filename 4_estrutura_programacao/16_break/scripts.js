let nome =  'Henrique';

for(let i = 0; i < 10; i = i + 1){

    if(i == 3){
        nome = 'João';
    }

    if(i == 5 && nome == 'João'){
        console.log('O nome é João, então já pode parar a execução do código...');
        break;
    }

    console.log(i);
}