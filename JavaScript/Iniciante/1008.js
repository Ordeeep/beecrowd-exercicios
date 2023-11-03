const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split('\n');

function calcularSalario(salario, horasTrabalhadas) {

    let salarioFinal = salario * horasTrabalhadas
    return salarioFinal
}

function exibirFuncionario(idFuncionario, s) {

    const funcionario = {
        numero: parseInt(idFuncionario),
        salario: s
    }
    console.log('NUMBER = ' + funcionario.numero + '\n' + 'SALARY = ' + 'U$ ' + funcionario.salario.toFixed(2))
}
const salarioCalculado = calcularSalario(parseFloat(lines[1]), parseFloat(lines[2]))

exibirFuncionario(lines[0], salarioCalculado)
