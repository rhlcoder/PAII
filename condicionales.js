/**
 * condiciones equivalentes
 */

// valores de prueba

const noNulo = 'no nulo';
const nulo = null;
const undef = undefined;
const empty = '';

// Usando ternarios

console.log(noNulo ? 'no nulo:   V -> (condicion)' : 'no nulo:   F -> (condicion)');
console.log(nulo ? 'nulo:      V -> (condicion)' : 'nulo:      F -> (condicion)');
console.log(undef ? 'undefined: V -> (condicion)' : 'undefined: F -> (condicion)');
console.log(empty ? 'empty:     V -> (condicion)' : 'empty:     F -> (condicion)');

console.log();

console.log(!(noNulo === null) ? 'no nulo:   V -> !(condicion === null)' : 'no nulo:   F -> !(condicion === null)');
console.log(!(nulo === null) ? 'nulo:      V -> !(condicion === null)' : 'nulo:      F -> !(condicion === null)');
console.log(!(undef === undefined) ? 'undefined: V -> !(condicion === null)' : 'undefined: F -> !(condicion === null)');
console.log(!(empty === '') ? 'Noempty:     V -> !(condicion === null)' : 'empty:     F -> !(condicion === null)');

console.log();

// Usando if-else

if (noNulo) {
  console.log('no nulo:   V -> (condicion)');
} else {
  console.log('no nulo:   F -> (condicion)');
}

if (nulo) {
  console.log('nulo:      V -> (condicion)');
} else {
  console.log('nulo:      F -> (condicion)');
}

if (undef) {
  console.log('undefined: V -> (condicion)');
} else {
  console.log('undefined: F -> (condicion)');
}

if (empty) {
  console.log('empty:     V -> (condicion)');
} else {
  console.log('empty:     F -> (condicion)');
}

console.log();

if (!(noNulo === null)) {
  console.log('no nulo:   V -> !(condicion === null)');
} else {
  console.log('no nulo:   F -> !(condicion === null)');
}

if (!(nulo === null)) {
  console.log('nulo:      V -> !(condicion === null)');
} else {
  console.log('nulo:      F -> !(condicion === null)');
}

if (!(undef === undefined)) {
  console.log('undefined: V -> !(condicion === null)');
} else {
  console.log('undefined: F -> !(condicion === null)');
}

if (!(empty === '')) {
  console.log('empty:     V -> !(condicion === null)');
} else {
  console.log('empty:     F -> !(condicion === null)');
}
