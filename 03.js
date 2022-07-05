/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.

  // Tu código aca:

  for (var i = 3, limit = Math.sqrt(n); i <= limit; i+=2) {
    if (n % i === 0) {
      return false;
    }
  } ;


    var suma = 0;
    for (var i = 0; i < arrayEnteros.length; i++) {//Recorro mi item de primos
        suma = suma + arrayEnteros[i]; //hago mi sumatoria
    }
    console.log(primos);
    return suma;//regreso todas las sumas
      
}


// No modifiques nada debajo de esta linea //

module.exports = sumaTodosPrimos