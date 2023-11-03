const input = require('fs').readFileSync('stdin', 'utf-8')
const lines = input.split('\n').map(item => parseFloat(item))



function calcularMedia(notaA,notaB,notaC){
    let media = ((notaA*2)+(notaB*3)+(notaC*5)) / 10
    return media
}

console.log('MEDIA = '+calcularMedia(lines[0],lines[1],lines[2]).toFixed(1))