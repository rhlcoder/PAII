/**
 * Usando getElement...
 */

span = document.getElementsByClassName('myClass')

function highlight() {
	for (const el of span) {
		el.style.background = 'yellow'
	}
}

/**
 * Usando querySelector
 */

span1 = document.querySelectorAll('.myClass')

function highlight() {
	for (const el of span1) {
		el.style.background = 'cyan'
	}
}
