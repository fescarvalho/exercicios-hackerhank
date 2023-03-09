function solucao(notas) {
  const newArr = notas.sort((a, b) => a - b);
  newArr.shift();
  newArr.pop();

  let soma = 0;

  for (let i = 0; i < newArr.length; i++) {
    soma += newArr[i];
  }

  const resultado = soma / newArr.length;
  console.log(resultado);
}
