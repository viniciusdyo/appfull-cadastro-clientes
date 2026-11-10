class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, endereco, cpf, dataNascimento) {
    super(nome, endereco);
    this.#cpf = cpf;
    this.#dataNascimento = dataNascimento;
  }

  get cpf() {
    return this.#cpf;
  }

  set cpf(cpf) {
    this.#cpf = cpf;
  }

  get dataNascimento() {
    return this.#dataNascimento;
  }

  set dataNascimento(dataNascimento) {
    this.#dataNascimento = dataNascimento;
  }
}
