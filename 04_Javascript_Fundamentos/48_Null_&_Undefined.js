let valor; // Não inicializada
console.log(valor);

valor = null; // Ela não tem valor e nem está apontando para nenhum endereço de memória
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // Evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // Sem preço
console.log(!!produto.preco);
console.log(produto);