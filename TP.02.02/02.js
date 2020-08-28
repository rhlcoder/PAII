/**
 * Usando getElement...
 */

const p = document.getElementsByClassName('test')
p[0].textContent = 'Hello World getElementsByClassName'

/**
 * Usando querySelector
 */

const p1 = document.querySelector('.test')
p1.textContent = 'Hello World querySelector'
