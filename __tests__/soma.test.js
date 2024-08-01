const soma = require("../soma.js");

test("deve retornar a soma de 1 + 2 igual a 3", () => {
  const resultado = soma(1, 2);
  expect(resultado).toBe(3);
});
