const prompt =  require ('prompt-sync')({sigint: true});

console.log('Digite as coordenadas dos pontos! (x1, x2, y1, y2)')
console.log('--------------------------------------')

let num = parseFloat(prompt('Digite x1: '))
let num2 = parseFloat(prompt('Digite x2: '))
let num3 = parseFloat(prompt('Digite y1: ')) 
let num4 = parseFloat(prompt('Digite y2: '))
console.log('--------------------------------------')

sub1 = num2 - num
sub2 = num4 - num3

raiz = Math.sqrt((sub1)**2 + (sub2)**2)
raiz = raiz.toFixed(4)

if (isNaN(raiz)) {
    console.log('--------------------------------------')
    console.log('Não foi possível realizar a operação')
    console.log('--------------------------------------')
}
else{
    console.log('--------------------------------------')
    console.log(`A distancia entre os pontos é: ${raiz}`)
    console.log('--------------------------------------')
}
