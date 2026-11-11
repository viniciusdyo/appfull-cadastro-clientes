import PessoaService from "./services/PessoaService.js";

const pessoaService = new PessoaService();

const app = () => {
  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física válida:");
  pessoaService.criarPessoaFisicaValida();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa jurídica válida:");
  pessoaService.criarPessoaJuridicaValida();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física com data de nascimento inválida:");
  pessoaService.criarPessoaFisicaDataNascimentoInvalida();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física com CPF inválido:");
  pessoaService.criarPessoaFisicaCpfInvalido();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa jurídica com CNPJ inválido:");
  pessoaService.criarPessoaJuridicaCnpjInvalido();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física com nome maior que 50 caracteres:");
  pessoaService.criarPessoaFisicaNomeMaiorQueCinquentaCaracteres();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física com nome menor que 3 caracteres:");
  pessoaService.criarPessoaFisicaNomeMenorQueTresCaracteres();

  console.log("----------------------------------------------------------");
  console.log("Criar pessoa física com a data de nascimento inválida:");
  pessoaService.criarPessoaFisicaDataNascimentoInvalida();
};

app();
