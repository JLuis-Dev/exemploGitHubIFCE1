/*
No exercicio o usuario digita 1 numero para calcular a area de um circulo,
caso nao coloque algum numero aparecera uma mensagem de erro!
*/


const prompt = require ('prompt-sync') ({sigint: true});

let raio = parseFloat(prompt('Digite um número: ')).toFixed(2)


r = 3.14159
area = (raio ** 2) * r
resultado = area.toFixed(4)

if (isNaN(raio)) {
    console.log('Não foi possível realizar a operação')    
}else{
    console.log(`A = ${resultado}`)
}   

