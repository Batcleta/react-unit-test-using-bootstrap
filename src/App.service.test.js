import React from "react";
import reactDom from "react-dom";
import AppService from "./App.service";

describe("desc: teste de calculadora", () => {
  const [calcular, contatenarNumero, Soma, Subtracao, Divisao, Multiplicacao] =
    AppService();

  it("deve garantir que 2+4 = 5", () => {
    let soma = calcular(2, 4, Soma);
    expect(soma).toEqual(6);
  });

  it("deve garantir que 4-2 = 3", () => {
    let subtração = calcular(4, 2, Subtracao);
    expect(subtração).toEqual(2);
  });

  it("deve garantir que 4*2 = 4", () => {
    let multiplicacao = calcular(2, 4, Multiplicacao);
    expect(multiplicacao).toEqual(8);
  });

  it("deve garantir que 4/0.25 = 16", () => {
    let divisao = calcular(4, 0.25, Divisao);
    expect(divisao).toEqual(16);
  });

  it("deve retornar zero para operaões inválidas", () => {
    const operacaoInvalida = calcular(1, 4, "%");
    expect(operacaoInvalida).toEqual(0);
  });
});
