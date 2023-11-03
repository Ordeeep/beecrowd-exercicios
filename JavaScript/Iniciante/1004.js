const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');


let numero1 = parseInt(lines.shift());
let numero2 = parseInt(lines.shift());

let PROD = numero1 * numero2;

console.log('PROD = '+PROD)