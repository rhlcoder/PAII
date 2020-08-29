// funciones en js

/**  usando function *******************************************************************************/

// creo una funcion que acepta dos argumentos
function concatenar01(nombre, texto) {
  return nombre + ' ' + texto
}
// creo una funcion que acepta un argumento menos y devuelve otra funcion con un argumento aplicado
function nombre01(texto01) {
  return concatenar01('el capitan', texto01)
}

console.log(nombre01) // aca devuelve una function
console.log(nombre01('pierde el brazo')) // aca el valor

/**  asignando la funcion anonima a una const o let *************************************************/

// creo una funcion que acepta dos argumentos
const concatenar02 = (nombre, texto) => nombre + ' ' + texto
// creo una funcion que acepta un argumento menos y devuelve otra funcion con un argumento aplicado
const nombre02 = texto02 => concatenar02('Eren', texto02)

console.log(nombre02) // aca devuelve una function
console.log(nombre02('se muere')) // aca el valor

/**  este seria el equivalente a las funciones de arriba *******************************************/

// en vez de hacer una funcion que acepta dos argumentos, en un solo paso,
// las hago que puedan recibir de a un argumento a la vez
const concatenar03 = nombre => texto => nombre + ' ' + texto

const nombre03 = concatenar03('Mikasa') // le podes asignar un parametro
console.log(nombre03) // aca devuelve una function (anonima esta vez)
console.log(nombre03('no se'))

// tambien le podes pasar dos argumentos, pero asi f()()
const nombreYspoilear = concatenar03('Armin')('huye')
console.log(nombreYspoilear)

// entonces esta funcion asignada a la constante check acepta 1 argumento (re)
// y devuelve una funcion (con el regex pre aplicado) y que acepta un argumento (e)
const check = re => e => (e.value.search(re) === -1 ? true : false)

// de esta manera no tengo que pasar el argumento del evento cada vez que quiera hacer un check nuevo
// y me permite organizar y separar el codigo de los regex por un lado y la aplicacion a los eventos
// por el otro

const isEmpty = check(/^.+$/)
const isNotText = check(/^[A-Za-z ]+$/)

// si fuera asi la funcion, aca no podria aplicar el evento, porque estoy fuera del eventListener
const check01 = (re, e) => (e.value.search(re) === -1 ? true : false)

// entonces tendria que hacer como en concatenar02 y esperar el 2do argumento
const isEmpty01 = e => check01(/^.+$/, e)
const isNotText01 = e => check01(/^[A-Za-z ]+$/, e)

// o aplicarlo directamente en cada fn del listener
function validarNombre() {
  errores.nombre.isEmpty = check01(/^.+$/, this)
  errores.nombre.isNotText = check01(/^[A-Za-z ]+$/, this)
}

// pero me parecio mas organizado y mas facil de comprender aplicar los regex antes
// y darle el nombre a la const de lo que hace cada uno
