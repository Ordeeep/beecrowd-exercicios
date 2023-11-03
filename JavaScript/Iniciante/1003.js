const input = require('fs').readFileSync('stdin', 'utf-8')
const lines = input.split('\n')

const A = parseInt(lines.shift())
const B = parseInt(lines.shift())
let SOMA = A + B

console.log('SOMA = '+ SOMA)