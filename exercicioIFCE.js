/*
No exercicio o usuario digita 2 numeros para fazer a soma,
caso nao coloque algum numero aparecera uma mensagem de erro!
*/


const prompt = require ('prompt-sync') ({sigint: true});

let num = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))

if (soma = num + num2) {
    console.log(`X = ${soma}`)
}else{
    console.log('Não foi possível realizar a operação')
}