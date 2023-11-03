
const input = require('fs').readFileSync('stdin', 'utf-8')
const lines = input.split('\n');

let raio = parseFloat(lines.shift())
let n = 3.14159

let area = n * (raio*raio)

console.log('A='+area.toFixed(4))