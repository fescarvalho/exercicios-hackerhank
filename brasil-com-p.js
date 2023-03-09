function solucao(primeiraLetra, segundaLetra, palavras) {
  let total = 0;

  for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
      console.log(palavra);
      total++;
    }
  }
  if (total === 0) {
    console.log("NENHUMA");
  }
}
