function solucao(resultados) {
  let total = 0;
  for (let i = 0; i < resultados.length; i++) {
    if (resultados[i] === "V") {
      total += 3;
    }
    if (resultados[i] === "E") {
      total += 1;
    }
  }
  console.log(total);
}
