const valor = 'Global';

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = 'Local';
  minhaFuncao();
}

exec();

// Quando uma função é declarada, ela tem "consicência" do contexto em que ela foi declarada