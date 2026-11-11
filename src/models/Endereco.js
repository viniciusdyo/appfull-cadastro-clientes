import {
  validarNumber,
  validarString,
  validarTamanho,
} from "../utils/utils.js";

export default class Endereco {
  #logradouro;
  #numero;
  #cidade;
  #uf;

  constructor(logradouro, numero, cidade, uf) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.uf = uf;
  }

  get logradouro() {
    return this.#logradouro;
  }

  set logradouro(logradouro) {
    if (
      validarString(logradouro) === false ||
      validarTamanho(logradouro, "campos") === false
    ) {
      throw new Error("Logradouro inválido.");
    }
    this.#logradouro = logradouro;
  }

  get numero() {
    return this.#numero;
  }

  set numero(numero) {
    if (validarNumber(numero) === false) {
      throw new Error("Número inválido.");
    }
    this.#numero = numero;
  }

  get cidade() {
    return this.#cidade;
  }

  set cidade(cidade) {
    if (
      validarString(cidade) === false ||
      validarTamanho(cidade, "campos") === false
    ) {
      throw new Error("Cidade inválida.");
    }
    this.#cidade = cidade;
  }

  get uf() {
    return this.#uf;
  }

  set uf(uf) {
    if (validarString(uf) === false || uf.length !== 2) {
      throw new Error("UF inválido.");
    }
    this.#uf = uf;
  }

  toString() {
    return `${this.logradouro}, ${this.numero} - ${this.cidade}/${this.uf}`;
  }
}
