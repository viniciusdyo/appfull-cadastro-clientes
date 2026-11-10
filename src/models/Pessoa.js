class Pessoa {
  #nome;
  #endereco;

  constructor(nome, endereco) {
    this.#nome = nome;
    this.#endereco = endereco;
  }

  get nome() {
    return this.#nome;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get endereco() {
    return this.#endereco;
  }

  set endereco(endereco) {
    this.#endereco = endereco;
  }
}
