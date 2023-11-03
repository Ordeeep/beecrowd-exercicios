const input = require('fs').readFileSync('stdin','utf-8')
const lines = input.split('\n').map(item => parseFloat(item))


function calcularMedia(notaA,notaB){
    let media = ((notaA*3.5) + (notaB * 7.5)) / 11
    return media
}

console.log('MEDIA = '+calcularMedia(lines[0],lines[1]).toFixed(5))
