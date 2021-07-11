import {
  conteudoClaro,
  fundoClaro,
  textoFundoClaro,
  fundoEscuro,
  textoFundoEscuro,
  conteudoEscuro,
} from "./variaveis";

// objeto tema claro
export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

// objeto tema escuro
export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100)",
};
