const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');

function calcularSalario(salarioFixo, totalVendas){
    let salarioFinal = ((15 / 100) * totalVendas) + salarioFixo;
    return salarioFinal;
}
console.log('TOTAL = R$ '+ calcularSalario(parseFloat(lines[1]), parseFloat(lines[2])).toFixed(2))


