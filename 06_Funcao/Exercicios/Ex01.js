// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

function operacoes(num1, num2) {
  let resultadoSoma = num1 + num2;
  let resultadoSubtracao = num1 - num2;
  let resultadoMultiplicacao = num1 * num2;
  let resultadoDivisao = num1 / num2;

  console.log(`${num1} + ${num2} = ${resultadoSoma}`);
  console.log(`${num1} - ${num2} = ${resultadoSubtracao}`);
  console.log(`${num1} * ${num2} = ${resultadoMultiplicacao}`);
  console.log(`${num1} / ${num2} = ${resultadoDivisao}`);
}

operacoes(10, 5);