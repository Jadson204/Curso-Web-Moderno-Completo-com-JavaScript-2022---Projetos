function Pessoa() {
  this.idade = 0;

  const self = this;
  setInterval(function() {
    self.idade++;
    console.log(self.idade);
  }/*.bind(this)*/, 1000); //Dispara uma outra função a partir de um intervalo
}

new Pessoa