const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const validarNumeroInformado = (numero) => {
  const resultado = Number.parseFloat(numero);
  if (!resultado) {
    console.log("Numero informado não é valido");
  }
  return resultado;

};

const validaOperador = (operador) => {
  switch (operador) {
    case '+':
    case '-':
    case '/':
    case '*':
    case '%':
      return operador;
    default:
      console.log("Operador informado não é valido");
      return null;
  }
};

readLine.question("Favor informar um numero: ", (numero1) => {
  const numeroValidado1 = validarNumeroInformado(numero1);

  if (numeroValidado1) {
    readLine.question("Favor informar outro numero: ", (numero2) => {
      const numeroValidado2 = validarNumeroInformado(numero2);

      if (numeroValidado2) {
        readLine.question("Favor informar o operador: ", (operador) => {
          const operadorValidado = validaOperador(operador);
          if (operadorValidado) {
            switch (operadorValidado) {
              case '+': console.log(`Operador selecionado foi adição, os números digitados foram: ${numeroValidado1} e ${numeroValidado2} resultado ${numeroValidado1 + numeroValidado2}`);
                break;
              case '-': console.log(`Operador selecionado foi subtração, os números digitados foram: ${numeroValidado1} e ${numeroValidado2} resultado ${numeroValidado1 - numeroValidado2}`);
                break;
              case '/': console.log(`Operador selecionado foi divisão, os números digitados foram: ${numeroValidado1} e ${numeroValidado2} resultado ${numeroValidado1 / numeroValidado2}`);
                break;
              case '*': console.log(`Operador selecionado foi multiplicação, os números digitados foram: ${numeroValidado1} e ${numeroValidado2} resultado ${numeroValidado1 * numeroValidado2}`);
                break;
              case '%': console.log(`Operador selecionado foi modulo, os números digitados foram: ${numeroValidado1} e ${numeroValidado2} resultado ${numeroValidado1 % numeroValidado2}`);
                break;
              default: break;
            }
          }
        });
      }
    });
  }
});