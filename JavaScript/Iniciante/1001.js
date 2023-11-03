
//1001 - Extremamente Básico
const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');


//o metodo shift serve para "apagar/tirar" os valores do vetor lines ex: a variável apagou o valor 10 de lines so sobrando o 9
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let X = A + B;
console.log(`X = ${X}`);
