// Funciones en js

/**  usando function *******************************************************************************/

// creo una funcion que acepta dos argumentos
function concatenar01(nombre, texto) {
  return nombre + ' ' + texto
}

// Creo una funcion que acepta un argumento menos y devuelve otra funcion con un argumento aplicado
function nombre01(texto01) {
  return concatenar01('el capitan', texto01)
}

console.log(nombre01) // Aca devuelve una function
console.log(nombre01('pierde el brazo')) // Aca el valor

/**  asignando la funcion anonima a una const o let *************************************************/

// creo una funcion que acepta dos argumentos
const concatenar02 = (nombre, texto) => nombre + ' ' + texto
// Creo una funcion que acepta un argumento menos y devuelve otra funcion con un argumento aplicado
const nombre02 = texto02 => concatenar02('Eren', texto02)

console.log(nombre02) // Aca devuelve una function
console.log(nombre02('se muere')) // Aca el valor

/**  este seria el equivalente a las funciones de arriba *******************************************/

// en vez de hacer una funcion que acepta dos argumentos, en un solo paso,
// las hago que puedan recibir de a un argumento a la vez
const concatenar03 = nombre => texto => nombre + ' ' + texto

const nombre03 = concatenar03('Mikasa') // Le podes asignar un parametro
console.log(nombre03) // Aca devuelve una function (anonima esta vez)
console.log(nombre03('no se'))

// Tambien le podes pasar dos argumentos, pero asi f()()
const nombreYspoilear = concatenar03('Armin')('huye')
console.log(nombreYspoilear)

// Entonces esta funcion asignada a la constante check acepta 1 argumento (re)
// y devuelve una funcion (con el regex pre aplicado) y que acepta un argumento (e)

const check = re => e => e.value.search(re) === -1
// Nota: despues me di cuenta que sin el ternario es lo mismo: "const check = re => e => (e.value.search(re) === -1"

// de esta manera no tengo que pasar el argumento del evento cada vez que quiera hacer un check nuevo
// y me permite organizar y separar el codigo de los regex por un lado y la aplicacion a los eventos
// por el otro

const isEmpty = check(/^.+$/)
const isNotText = check(/^[A-Za-z ]+$/)

// Si fuera asi la funcion, aca no podria aplicar el evento, porque estoy fuera del eventListener
const check01 = (re, e) => e.value.search(re) === -1

// Entonces tendria que hacer como en concatenar02 y esperar el 2do argumento
const isEmpty01 = e => check01(/^.+$/, e)
const isNotText01 = e => check01(/^[A-Za-z ]+$/, e)

// O aplicarlo directamente en cada fn del listener
function validarNombre() {
  errores.nombre.isEmpty = check01(/^.+$/, this)
  errores.nombre.isNotText = check01(/^[A-Za-z ]+$/, this)
}

// Pero me parecio mas organizado y mas facil de comprender aplicar los regex antes
// y darle el nombre a la const de lo que hace cada uno
