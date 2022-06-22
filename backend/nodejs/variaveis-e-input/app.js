const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const minhaPrimeiraConstanteString = "Minha primeira constante";
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
let teste = "teste";
readLine.question("Por favor digite alguma coisa: ", input => {
  leituraDeCampo = input;
  console.log(`O usuario digitou: ${leituraDeCampo} e nossa variável de testes é: ${teste}`);
});


