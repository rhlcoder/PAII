const edad = document.querySelector('#edad');
const email = document.querySelector('#email');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const password = document.querySelector('#password');

/** hacer las validaciones con regex */

// al armar la funcion de esta manera, (re) => (e) =>{} , la currifico y la dejo point free
const check = (re) => (e) => (e.value.search(re) === -1 ? true : false);

const isEmpty             = check(/^.+$/);
const isNotText           = check(/^[A-Za-z ]+$/);
const isNotEmail          = check(/^[a-zA-Z0-9-_]+@(gmail|outlook|icloud)\.com$/);
const isNotNumber         = check(/^[0-9]*$/);
const isBiggerThan20      = check(/^.{0,20}$/);
const doesntHaveNumber    = check(/[0-9]/);
const isNotBetween9And20  = check(/^.{9,21}$/);
const doesntHaveLowerCase = check(/[a-z]/);
const doesntHaveUpperCase = check(/[A-Z]/);
// Fin de hacer las validaciones con regex

edad.addEventListener('blur', validarEdad);
email.addEventListener('blur', validarEmail);
nombre.addEventListener('blur', validarNombreYApellido);
apellido.addEventListener('blur', validarNombreYApellido);
password.addEventListener('blur', validarPassword);

function validarNombreYApellido() {
  let output = [];
  if (isEmpty(this)) output.push(`${this.name}: No puede estar vacio\n`);
  if (isNotText(this)) output.push(`${this.name}: Solo acepta texto\n`);
  if (isBiggerThan20(this)) output.push(`${this.name}: No puede exceder los 20 caracteres\n`);
  console.log(...output);
}

function validarEdad() {
  if (isNotNumber(this)) console.log(`${this.name}: Solo acepta numeros`);
}

function validarPassword() {
  let output = [];
  if (isEmpty(this)) output.push(`${this.name}: No puede estar vacio\n`);
  if (doesntHaveNumber(this)) output.push(`${this.name}: Debe contener un numero\n`);
  if (isNotBetween9And20(this)) output.push(`${this.name}: Debe tener entre 9 y 20 caracteres\n`);
  if (doesntHaveLowerCase(this)) output.push(`${this.name}: Debe contener una minuscula\n`);
  if (doesntHaveUpperCase(this)) output.push(`${this.name}: Debe contener una mayuscula\n`);
  console.log(...output);
}

function validarEmail() {
  let output = [];
  if (isEmpty(this)) output.push(`${this.name}: No puede estar vacio\n`);
  if (isNotEmail(this)) output.push(`${this.name}: No es un email valido\n`);
  console.log(...output);
}
