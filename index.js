//Ejercicio 1

var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var emoji = (i % 3 === 1) ? '😺' : (i % 3 === 2) ? '😸' : '😹';
  console.log('Gato #' + i + ': ' + emoji);
}

//Ejercicio 2

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = 'Gato #' + i + ': 🐈';
  var pasos = '';
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasos += ' 🐾';
  }
  console.log(gato + pasos);
}

//Ejercicio 3

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gato = 'Gato #' + i + ': ';
  if (i % 2 === 0) {
    gato += '🐈🐈';
  } else {
    gato += '🐈';
  }

  var pasos = '';
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasos += ' 🐾';
  }
  
  console.log(gato + pasos);
}