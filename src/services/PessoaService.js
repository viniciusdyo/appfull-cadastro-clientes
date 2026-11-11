import Endereco from "../models/Endereco.js";
import PessoaFisica from "../models/PessoaFisica.js";
import PessoaJuridica from "../models/PessoaJuridica.js";

export default class PessoaService {
  criarPessoaJuridicaValida() {
    const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
    const novaPessoa = new PessoaJuridica(
      "Empresa X",
      endereco,
      "12.345.678/0001-90",
      "Razão Social X",
    );
    console.log("----------------------------------------------");
    console.log("Pessoa jurídica criada com sucesso!");
    console.log("Nome:", novaPessoa.nome);
    console.log("Endereço:", novaPessoa.endereco.toString());
    console.log("CNPJ:", novaPessoa.cnpj);
    console.log("Razão Social:", novaPessoa.razaoSocial);
    console.log("----------------------------------------------");
    return novaPessoa;
  }

  criarPessoaFisicaValida() {
    const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
    const novaPessoa = new PessoaFisica(
      "João da Silva",
      endereco,
      "123.456.789-00",
      "01-01-1990",
    );

    console.log("----------------------------------------------");
    console.log("Pessoa física criada com sucesso!");
    console.log("Nome:", novaPessoa.nome);
    console.log("Endereço:", novaPessoa.endereco.toString());
    console.log("CPF:", novaPessoa.cpf);
    console.log("Data de Nascimento:", novaPessoa.dataNascimento);
    console.log("----------------------------------------------");
    return novaPessoa;
  }

  criarPessoaFisicaDataNascimentoInvalida() {
    try {
      const dataFutura = new Date();
      dataFutura.setFullYear(dataFutura.getFullYear() + 1);
      const novaData = dataFutura
        .toLocaleDateString("pt-BR")
        .replaceAll("/", "-");

      const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
      const novaPessoa = new PessoaFisica(
        "João da Silva",
        endereco,
        "123.456.789-00",
        novaData,
      );
      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa física:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }

  criarPessoaFisicaCpfInvalido() {
    try {
      const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
      const novaPessoa = new PessoaFisica(
        "João da Silva",
        endereco,
        "123.456.78-00",
        "01-01-1990",
      );
      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa física:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }

  criarPessoaJuridicaCnpjInvalido() {
    try {
      const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
      const novaPessoa = new PessoaJuridica(
        "Empresa X",
        endereco,
        "12.345.67/0001-9",
        "Razão Social X",
      );
      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa jurídica:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }

  criarPessoaFisicaNomeMaiorQueCinquentaCaracteres() {
    try {
      const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");
      const nomeLongo =
        "Nooooooooooooooooooooooooooooommmmmmmmmeeeeeeeeeeeeeeeeelooooooooooooooooonnnnnnnnnnnnnnnnnnnngoooooooooooooooooooooooooooooooooooooooooooooooo";

      const novaPessoa = new PessoaFisica(
        nomeLongo,
        endereco,
        "123.456.789-00",
        "01-01-1990",
      );
      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa física:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }

  criarPessoaFisicaNomeMenorQueTresCaracteres() {
    try {
      const endereco = new Endereco("Rua A", 123, "Cidade B", "SP");

      const novaPessoa = new PessoaFisica(
        "Vi",
        endereco,
        "123.456.789-00",
        "01-01-1990",
      );
      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa física:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }

  criarPessoaJuridica(nome, endereco, cnpj, razaoSocial) {
    try {
      const novaPessoa = new PessoaJuridica(nome, endereco, cnpj, razaoSocial);

      console.log("----------------------------------------------");
      console.log("----------------------------------------------");
      console.log("Pessoa jurídica criada com sucesso!");
      console.log("Nome:", novaPessoa.nome);
      console.log("Endereço:", novaPessoa.endereco.toString());
      console.log("CNPJ:", novaPessoa.cnpj);
      console.log("Razão Social:", novaPessoa.razaoSocial);
      console.log("----------------------------------------------");
      console.log("----------------------------------------------");

      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa jurídica:", error.message);
      return error;
    }
  }

  criarPessoaFisica(nome, endereco, cpf, dataNascimento) {
    try {
      const novaPessoa = new PessoaFisica(nome, endereco, cpf, dataNascimento);

      console.log("----------------------------------------------");
      console.log("----------------------------------------------");
      console.log("Pessoa física criada com sucesso!");
      console.log("Nome:", novaPessoa.nome);
      console.log("Endereço:", novaPessoa.endereco.toString());
      console.log("CPF:", novaPessoa.cpf);
      console.log("Data de Nascimento:", novaPessoa.dataNascimento);
      console.log("----------------------------------------------");
      console.log("----------------------------------------------");

      return novaPessoa;
    } catch (error) {
      console.log("Erro ao criar pessoa física:", error.message);
      console.log("----------------------------------------------");
      return error;
    }
  }
}
