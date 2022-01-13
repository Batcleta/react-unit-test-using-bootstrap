export default function calculadoraService() {
  const Soma = "+";
  const Subtracao = "-";
  const Divisao = "/";
  const Multiplicacao = "*";

  function calcular(numero1, numero2, operador) {
    let resultado;
    switch (operador) {
      case Soma:
        resultado = numero1 + numero2;
        break;

      case Subtracao:
        resultado = numero1 - numero2;
        break;

      case Divisao:
        resultado = numero1 / numero2;
        break;

      case Multiplicacao:
        resultado = numero1 * numero2;
        break;

      default:
        resultado = 0;
        break;
    }
    return resultado;
  }

  function concatenarNumero(numAtual, numConcat) {
    //  Caso contenha apenas zero ou null, reinicia o valor
    if (numAtual === "0" || numAtual === null) {
      numAtual = "";
    }
    // Primeiro digitor for '.', concatena o zero antes do ponto
    if (numConcat === "." && numAtual === "0") {
      return `0.`;
    }
    //  Caso '.' ja tenha sito digitado, retorna nada
    if (numConcat === "." && numAtual.indexOf(".") > -1) {
      return;
    }
    return numAtual + numConcat;
  }

  return [calcular, concatenarNumero, Soma, Subtracao, Divisao, Multiplicacao];
}
