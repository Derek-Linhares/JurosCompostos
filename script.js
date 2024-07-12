function calc() {
  var init = document.getElementById("init").value;
  var juros = document.getElementById("juros").value;
  var time = document.getElementById("time").value;
  var error = false;

  init = init.replace(",", ".");
  juros = juros.replace(",", ".");
  time = time.replace(",", ".");

  if (
    init === "" ||
    isNaN(parseFloat(init)) ||
    juros === "" ||
    isNaN(parseFloat(juros)) ||
    time === "" ||
    isNaN(parseFloat(time))
  ) {
    error = true;
    changeStyle(error);
  } else {
    init = parseFloat(init);
    juros = parseFloat(juros);
    time = parseFloat(time);

    changeStyle(error);
    var montante = init * Math.pow(1 + juros / 100, time);

    var resultado = montante.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    document.getElementById("valor").innerHTML = resultado;
  }
}

function changeStyle(error) {
  var total = document.getElementById("total");
  if (error) {
    total.style.fontSize = "20px";
    total.style.marginTop = "20px";
    total.style.marginBottom = "20px";
    total.innerHTML = "Nenhum dos campos deve estar vazio";
  } else {
    total.style.fontSize = "";
    total.style.marginTop = "";
    total.style.marginBottom = "";
    total.innerHTML =
      '<p id="resultado">Resultado:</p><h1>R$ <span id="valor">0,00</span></h1>';
  }
}
