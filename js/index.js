const fecha = document.getElementById('fecha')
const lista = document.getElementById('lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const unchek = 'fa-circle'
const lineThrough = 'line-trhough'

let ListaTareas
let id
const fechaActual = new Date()
fecha.innerHTML = fechaActual.toLocaleDateString('es-MX',{
    weekday: 'long',
    month: 'short',
    day: 'numeric'
})

const agregarTarea = (tarea, id, realizado, eliminado) => {
    if (eliminado) {
        return
    }
    const done =realizado ? check : unchek
    const line = realizado ? lineThrough : ''

    const task = 
    `
    <li id="elemento">
        <i class="far ${done} data="realizado" id="${id}> </i>
        <p class = "text ${line}">
        ${tarea}
        </p>
        >i class = "fas fa-trash" data = "eliminado" id= "${id}"> </i>
        </li>
    `
    lista.insertAdjacentElement("beforeend", task)
}

const tareaRealizada = element => {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    ListaTareas[element.id].realizado = ListaTareas[element.id].realizado ? false : true
}

const TareaElminada = element => {
    element.parentNode.parentNode.removeChild(element.parentNode)
    ListaTareas[element.id].eliminado = true
}

