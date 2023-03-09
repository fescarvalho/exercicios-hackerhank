function solucao(disparos) {
  let pontuacao = 0;
  for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] > 70) {
      pontuacao++;
    }
  }

  if (pontuacao >= 3) {
    console.log(pontuacao);
  } else {
    console.log("ELIMINADO");
  }
}
