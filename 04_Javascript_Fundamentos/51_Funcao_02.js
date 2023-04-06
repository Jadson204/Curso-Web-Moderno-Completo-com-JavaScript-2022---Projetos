// Aramazenando uma função em uma variável/constante
const imprimirSoma = function(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável/constante
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a -b; // É ideal para uma função que só tenha uma linha de código a ser executada
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);