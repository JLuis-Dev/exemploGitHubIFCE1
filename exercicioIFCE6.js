const prompt = require ('prompt-sync')({sigint: true});

console.log('Digite um DDD para saber a cidade correspondente!')
console.log('--------------------------------------')

let ddd = parseInt(prompt('Digite o DDD: '))
console.log('--------------------------------------')

if (isNaN(ddd)) {
    console.log('Não foi possível realizar a operação')
}else if (ddd == 61) {
    console.log('Brasília')
}
else if (ddd == 71) {
    console.log('Salvador')
}
else if (ddd == 11) {
    console.log('São Paulo')
}
else if (ddd == 21) {
    console.log('Rio de Janeiro')
}
else if (ddd == 32) {
    console.log('Juiz de Fora')
}
else if (ddd == 19) {
    console.log('Campinas')
}
else if (ddd == 27) {
    console.log('Vitória')
}
else if (ddd == 31) {
    console.log('Belo Horizonte')
}
else if (ddd == 85) {
    console.log('Fortaleza')
}
else{
    console.log('DDD não cadastrado')
}