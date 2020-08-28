/**
 * Usando getElement...
 */


const table = document.getElementsByClassName('myTable')

function insertRow() {
  const tr = document.createElement('tr')
  tr.setAttribute('id', 'row')
  tr.innerHTML = `<td>usando</td><td>getElement ${table.childElementCount}</td>`
  table[0].appendChild(tr)
}

function deleteRow() {
  const lastRow = table[0].lastElementChild
  if (lastRow.getAttribute('id') === 'row') {
    table[0].removeChild(lastRow)
  }
}


/**
 * Usando querySelector
 */

const table1 = document.querySelector('.myTable')

function insertRow() {
  const tr = document.createElement('tr')
  tr.setAttribute('id', 'row')
  tr.innerHTML = `<td>usando</td><td>querySelector ${table1.childElementCount}</td>`
  table1.appendChild(tr)
}

function deleteRow() {
  const lastRow = document.querySelector('#row:last-child')
  if (lastRow) table1.removeChild(lastRow)
}
