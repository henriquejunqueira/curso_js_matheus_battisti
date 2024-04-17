function imprimeNumeroPar(numero){
    for(let i = numero; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

imprimeNumeroPar(10);
imprimeNumeroPar(33);