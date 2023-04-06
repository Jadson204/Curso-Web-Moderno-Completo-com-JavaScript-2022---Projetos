// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
imprimirSoma(2); // Vai somar 2 + undefined, como resultado, retornará um NaN (Not a number)
imprimirSoma(2, 3, 4, 5 ,6 ,7, 8); // Só irá somar os 2 primeiros
imprimirSoma(); // Vai retornar um NaN

// Função com retorno
function soma(a = 0, b = 0) {
    return a + b;
}
console.log(soma(2, 3));
console.log(soma());