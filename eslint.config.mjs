import globals from "globals";
import { ESLint } from "eslint";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module", // Alterado para 'module' se você estiver usando ES Modules
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "always"], // Exige ponto-e-vírgula
      indent: ["error", 2], // Exige indentação de 2 espaços
      "no-unused-vars": "error", // Erro para variáveis não utilizadas
      "no-mixed-spaces-and-tabs": "error", // Erro para mistura de espaços e tabs
      "eol-last": ["error", "always"], // Exige uma linha em branco no final do arquivo
    },
  },
];
