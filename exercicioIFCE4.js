const prompt =  require('prompt-sync')({sigint: true});

console.log('Digite a nota do aluno!')
console.log('Nota maxima permitida: 10.0')
console.log('--------------------------------------')

let nota1 = parseFloat(prompt('Digite a primeira nota: '))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))
let media = ((nota1 + nota2) / 2).toFixed(4)

if (isNaN(media)) {
    console.log('--------------------------------------')
    console.log('Não foi possível realizar a operação')
    console.log('--------------------------------------')
}else{
    console.log('--------------------------------------')
    console.log(`Média = ${media}`)    
    console.log('--------------------------------------')
}
