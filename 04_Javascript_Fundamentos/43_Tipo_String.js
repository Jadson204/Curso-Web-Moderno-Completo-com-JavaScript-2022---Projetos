const escola = 'Cod3r';

console.log(escola.charAt(4)); // Retorna a letra que está no índice 4
console.log(escola.charAt(5)); // Nesse caso, retorna uma valor vazio " "
console.log(escola.charCodeAt(3)); // Retorna o valor da tabela ASCI(Unicode) da letra que está no índice 3
console.log(escola.indexOf('3')); // Retorna o índice em que está o caractere '3'
console.log(escola.substring(0, 3)); // Retorna a string contida nos índices passados, não incluindo o último índice
console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(3, 'e')); // Substitui o primeiro caractere pelo segundo
console.log('Ana, Maria, Pedro'.split(',')); // Converte para array usando a vírgula como separador