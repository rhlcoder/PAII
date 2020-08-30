// console.log(getComputedStyle(document.documentElement).getPropertyValue('--icono'))

const productos = document.querySelector('#productos')
const deseados = document.querySelector('#deseados')

// En este caso uso el parent node como base y con un if, selecciono el children
// para lidiar con la propagacion.

/* Version que pide el TP */
// Para agragar a la lista de deseados
productos.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    let id = `#${e.target.parentElement.id}`
    let selected = document.querySelector(id)
    if (document.querySelector(`${id}-deseado`)) {
      // alert("El producto ya fue agregado")
      console.log('El producto ya fue agregado')
    } else {
      let copy = selected.cloneNode(true)
      copy.id = copy.id + '-deseado'
      deseados.append(copy)
      copy.lastChild.textContent = 'Quitar de la lista de deseados'
    }
  }
})

deseados.addEventListener('click', e => {
  // Para remover de la lista de deseados
  if (e.target.nodeName === 'BUTTON') {
    let selected = document.querySelector(`#${e.target.parentElement.id}`)
    selected.remove()
  }

  // Para ordenar por prioridad
  if (e.target.nodeName === 'LI') {
    let ul = document.querySelector('#deseados')
    let item = document.querySelector('#' + e.target.id)
    if (e.shiftKey) {
      if (item.nextSibling) {
        ul.insertBefore(item.nextSibling, item)
      }
    } else {
      if (item.previousSibling) {
        ul.insertBefore(item, item.previousSibling)
      }
    }
  }
})

// Para cambiar el icono, o el cursor cuando se aprieta shift
// modifico una variable en css, que se aplica al campo correspondiente

document.addEventListener('keydown', e => {
  if (e.shiftKey) {
    // document.documentElement.style.setProperty('--icono', '"⬇️"')
    document.documentElement.style.setProperty('--cursor', 'url(down.png)')
  }
})

document.addEventListener('keyup', () => {
  // document.documentElement.style.setProperty('--icono', '"⬆️"')
  document.documentElement.style.setProperty('--cursor', 'url(up.png)')
})

// Version mas chevere
/* productos.addEventListener('click', (e) => {
	if (e.target.nodeName === 'BUTTON') {
    e.target.textContent = 'Quitar de la lista de deseados'
    let selected = document.querySelector(`#${e.target.parentElement.id}`)
		deseados.append(selected)
	}
})

deseados.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    e.target.textContent = 'Agregar a la lista de deseados'
		let selected = document.querySelector(`#${e.target.parentElement.id}`)
		productos.append(selected)
	}
}) */
