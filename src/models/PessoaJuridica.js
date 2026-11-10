class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, endereco, cnpj, razaoSocial) {
    super(nome, endereco);
    this.#cnpj = cnpj;
    this.#razaoSocial = razaoSocial;
  }

  get cnpj() {
    return this.#cnpj;
  }

  set cnpj(cnpj) {
    this.#cnpj = cnpj;
  }

  get razaoSocial() {
    return this.#razaoSocial;
  }

  set razaoSocial(razaoSocial) {
    this.#razaoSocial = razaoSocial;
  }
}
