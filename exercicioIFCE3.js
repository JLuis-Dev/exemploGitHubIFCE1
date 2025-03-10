/*
No exercicio o usuario digita 2 numeros para fazer a multiplicação,
caso nao coloque algum numero aparecera uma mensagem de erro!
*/

const prompt = require ('prompt-sync') ({sigint: true});  // This line is importing the prompt-sync module and setting it to a variable.

let num = parseInt(prompt('Digite um número: '))  // This line is declaring a variable and assigning it a value that the user inputs.
let num2 = parseInt(prompt('Digite outro número: '))  // This line is declaring a variable and assigning it a value that the user inputs.

if (multi = num * num2) {  // This line is checking if the variable 'multi' is equal to the product of the variables 'num' and 'num2'.
    console.log('--------------------------------------')
    console.log(`PROD = ${multi}`)  // This line is outputting a message to the console with the value of the variable 'multi'.
}
else {  // This line is declaring the start of an else statement.
    console.log('--------------------------------------')
    console.log('Não foi possível realizar a operação')  // This line is outputting a message to the console.
}  // This line is closing the else statement.   