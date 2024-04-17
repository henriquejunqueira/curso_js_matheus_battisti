function tipoDeDado(x){
    if(typeof(x) === 'number'){
        console.log(`${x} é do tipo 'number'`);
    }else if(typeof(x) === 'string'){
        console.log(`${x} é do tipo 'string'`);
    }else if(typeof(x) === 'boolean'){
        console.log(`${x} é do tipo 'boolean'`);
    }
}

tipoDeDado(8);
tipoDeDado('olá');
tipoDeDado(true);