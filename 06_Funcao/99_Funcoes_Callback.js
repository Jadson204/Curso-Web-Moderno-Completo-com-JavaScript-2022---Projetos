// Passar uma função para outra função e, quando determinado evento acontecer, essa função passada é disparada
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
// Para cada elemento do array, ele vai disparar a função imprimir
fabricantes.forEach(function(a) {
  console.log(a);
})