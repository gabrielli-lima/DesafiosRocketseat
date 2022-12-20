var dataFinal = new Date("Dec 20, 2023 12:30:25").getTime();

var x = setInterval(function () {

  var agora = new Date().getTime();

  var tempoRestante = dataFinal - agora;

  var dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  var horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  if (dias < 10) {
    dias = "0" + dias
  }
  if (horas < 10) {
    horas = "0" + horas
  }
  if (minutos < 10) {
    minutos = "0" + minutos
  }
  if (segundos < 10) {
    segundos = "0" + segundos
  }

  document.getElementById("countdown").innerHTML = dias + " : " + horas + " : " +
    minutos + " : " + segundos + "  ";

  if (tempoRestante < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "LANÇADO";
  }
}, 1000);