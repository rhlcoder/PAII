// Console.log(getComputedStyle(document.documentElement).getPropertyValue('--icono'))

const productos = document.querySelector('#productos');
const deseados = document.querySelector('#deseados');

// En este caso uso el parent node como base y con un if, selecciono el children
// para lidiar con la propagacion.

/* Version que pide el TP */
// Para agragar a la lista de deseados
productos.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    const id = `#${event.target.parentElement.id}`;
    const selected = document.querySelector(id);
    if (document.querySelector(`${id}-deseado`)) {
      // Alert("El producto ya fue agregado")
      console.log('El producto ya fue agregado');
    } else {
      const copy = selected.cloneNode(true);
      copy.id += '-deseado';
      deseados.append(copy);
      copy.lastChild.textContent = 'Quitar de la lista de deseados';
    }
  }
});

deseados.addEventListener('click', (event) => {
  // Para remover de la lista de deseados
  if (event.target.nodeName === 'BUTTON') {
    const selected = document.querySelector(`#${event.target.parentElement.id}`);
    selected.remove();
  }

  // Para ordenar por prioridad
  if (event.target.nodeName === 'LI') {
    // const ul = document.querySelector('#deseados');
    const item = document.querySelector(`#${event.target.id}`);
    if (event.shiftKey) {
      if (item.nextSibling) {
        deseados.insertBefore(item.nextSibling, item);
      }
    } else if (item.previousSibling) {
      deseados.insertBefore(item, item.previousSibling);
    }
  }
});

// Para cambiar el icono, o el cursor cuando se aprieta shift
// modifico una variable en css, que se aplica al campo correspondiente

document.addEventListener('keydown', (event) => {
  if (event.shiftKey) {
    // Document.documentElement.style.setProperty('--icono', '"⬇️"')
    document.documentElement.style.setProperty('--cursor', 'url(down.png)');
  }
});

document.addEventListener('keyup', () => {
  // Document.documentElement.style.setProperty('--icono', '"⬆️"')
  document.documentElement.style.setProperty('--cursor', 'url(up.png)');
});
