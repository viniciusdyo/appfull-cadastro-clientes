function validarFormatoData(data) {
  const regex = /^(\d{2})\-(\d{2})\-(\d{4})$/;
  if (!regex.test(data)) {
    return false;
  }

  try {
    const dataTeste = new Date(data);
  } catch (error) {
    return false;
  }

  return true;
}

function validarComDataAtual(dataAntiga) {
  const antigaDate = new Date(dataAntiga);
  const dataAtual = new Date();

  if (antigaDate > dataAtual) {
    return false;
  }
  return true;
}

function validarNumber(numero) {
  if (!numero || typeof numero !== "number" || numero < 0) {
    return false;
  }
  return true;
}

function validarString(texto) {
  if (!texto || typeof texto !== "string" || texto === "") {
    return false;
  }
  return true;
}

function sanitizarDocumento(documento) {
  const novodocumento = documento.replace(/[^\d]+/g, "").trim();
  return novodocumento;
}

function validarTamanho(valor, rotulo) {
  switch (rotulo) {
    case "nome":
      if (valor.length < 3 || valor.length > 50) {
        return false;
      }
      break;
    case "cpf":
      const novoDocumento = sanitizarDocumento(valor);
      if (novoDocumento.length < 11 || novoDocumento.length > 11) {
        return false;
      }
      break;
    case "cnpj":
      const novoCnpj = sanitizarDocumento(valor);
      if (novoCnpj.length < 14 || novoCnpj.length > 14) {
        return false;
      }
      break;
    case "campos":
      if (valor.length < 3 || valor.length > 250) {
        return false;
      }
      break;
  }
  return true;
}

export {
  validarComDataAtual,
  validarFormatoData,
  validarNumber,
  validarString,
  validarTamanho,
};
