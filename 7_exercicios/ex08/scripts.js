function verificaTamanhoString(texto){
    console.log(`A string tem ${texto.length} caracteres`);
    if(texto.length > 10){
        console.log('Texto muito longo');
    }else{
        console.log('Texto dentro do limite');
    }
}

verificaTamanhoString('Meu nome é Henrique');
verificaTamanhoString('oi');