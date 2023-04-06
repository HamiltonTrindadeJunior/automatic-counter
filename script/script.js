function contar() {
  // pegando os valores digitados pelo usuário
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("res");

  // verificando se os campos estão vazios
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert("ERRO! Faltam dados.");
    res.innerHTML = "Impossivel contar!"
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    // verificando o número inicial é maior que o número final
    if (i < f) {
      // contando de forma crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
      res.innerHTML += `\u{1F3C1}`;
    } else {
      // contando de forma decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
      res.innerHTML += `\u{1F3C1}`;
    }
  }
}