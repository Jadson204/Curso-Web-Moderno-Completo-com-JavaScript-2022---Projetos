function getInteiroAleatorio(min, max) {
  const valor = Math.random() * (max-min) + min;
  return Math.floor(valor);
}

do {
  opcao = getInteiroAleatorio(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != -1)

console.log(`Até a próxima!`);