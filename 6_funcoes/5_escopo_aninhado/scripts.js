let a = 10;

function multiplicar(x, y){
    let a = x * y;

    if(a > 10){
        let a = 0;

        console.log(a); // Saída da variável 'a' do escopo do if
    }

    console.log(a); // Saída da variável 'a' do escopo da função
}

console.log(a); // Saída da variável 'a' do escopo global

multiplicar(3, 7);

// let b = 20;

// function divisao(num1, num2){
//     let b = num1 / num2;

//     if(num2 === 0){
//         let b = 30;
//         console.log('Não existe divisão por 0');
//         console.log(b);
//     }else{
//         console.log(b);
//     }
// }

// console.log(b);

// divisao(3, 8);
// divisao(5, 0);