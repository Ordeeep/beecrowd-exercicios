const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');


function diferencaDoProduto(A,B,C,D){
    let diferenca = (A * B - C * D)
    return diferenca
}
console.log('DIFERENCA = '+diferencaDoProduto(lines[0],lines[1],lines[2],lines[3]))