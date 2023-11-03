const input = require('fs').readFileSync('stdin', 'utf-8');
let lines = input.split('\n');
let valores = [[], []];

for (let linha = 0; linha < 2; linha++) {
    const valoresLinha = lines[linha].split(' ');
    for (let coluna = 0; coluna < 3; coluna++) {
        valores[linha][coluna] = parseFloat(valoresLinha[coluna]);
    }
}

console.log(valores);
