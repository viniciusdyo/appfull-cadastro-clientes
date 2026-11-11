import {
  validarComDataAtual,
  validarFormatoData,
  validarString,
  validarTamanho,
} from "../utils/utils.js";

import Pessoa from "./Pessoa.js";

export default class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, endereco, cpf, dataNascimento) {
    super(nome, endereco);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    if (validarString(cpf) === false || validarTamanho(cpf, "cpf") === false) {
      throw new Error("CPF inválido.");
    }
    this.#cpf = cpf;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }

  set dataNascimento(dataNascimento) {
    if (
      validarString(dataNascimento) === false ||
      validarFormatoData(dataNascimento) === false
    ) {
      throw new Error("Data de nascimento inválida.");
    }

    if (validarComDataAtual(dataNascimento) === false) {
      throw new Error(
        "Data de nascimento não pode ser maior que a data atual.",
      );
    }
    this.#dataNascimento = dataNascimento;
  }
}
