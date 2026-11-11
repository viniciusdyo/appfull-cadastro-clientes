import { validarString, validarTamanho } from "../utils/utils.js";
import Pessoa from "./Pessoa.js";
export default class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, endereco, cnpj, razaoSocial) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(cnpj) {
    if (
      validarString(cnpj) === false ||
      validarTamanho(cnpj, "cnpj") === false
    ) {
      throw new Error("CNPJ inválido.");
    }
    this.#cnpj = cnpj;
  }

  get razaoSocial() {
    return this.#razaoSocial;
  }

  set razaoSocial(razaoSocial) {
    if (validarString(razaoSocial) === false) {
      throw new Error("Razão social inválida.");
    }

    if (validarTamanho(razaoSocial, "nome") === false) {
      throw new Error("Razão social deve ter entre 3 e 50 caracteres.");
    }
    this.#razaoSocial = razaoSocial;
  }
}
