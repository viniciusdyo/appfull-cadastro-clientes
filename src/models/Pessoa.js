import { validarString, validarTamanho } from "../utils/utils.js";
import Endereco from "./Endereco.js";
export default class Pessoa {
  #nome;
  #endereco;

  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    if (validarString(nome) === false) {
      throw new Error("Nome inválido.");
    }

    if (validarTamanho(nome, "nome") === false) {
      throw new Error("Nome deve ter entre 3 e 50 caracteres.");
    }

    this.#nome = nome;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(endereco) {
    if (!endereco || !(endereco instanceof Endereco)) {
      throw new Error("Endereço inválido.");
    }
    this.#endereco = endereco;
  }
}
